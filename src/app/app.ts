import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormArray, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  commandeForm!: FormGroup;
  commandeAffichee: any = null;
  notificationMessage: string | null = null; // Pour la notification de confirmation

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
    this.ecouterCalculs();
  }

  private initForm(): void {
    this.commandeForm = this.fb.group({
      client: this.fb.group({
        prenom: ['', Validators.required],
        nom: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telephone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
      }),
      livraison: this.fb.group({
        adresse: ['', Validators.required],
        ville: ['', Validators.required],
        codePostal: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
        pays: ['', Validators.required]
      }),
      articles: this.fb.array([this.creerArticle()]),
      codePromo: ['', [], [this.validateurCodePromo]]
    }, {
      validators: [this.validateurQuantiteTotale]
    });
  }

  creerArticle(): FormGroup {
    return this.fb.group({
      produit: ['', Validators.required],
      quantite: [1, [Validators.required, Validators.min(1)]],
      prix: [0, [Validators.required, Validators.min(0)]],
      total: [{ value: 0, disabled: true }]
    });
  }

  get articles(): FormArray {
    return this.commandeForm.get('articles') as FormArray;
  }

  ajouterArticle(): void {
    this.articles.push(this.creerArticle());
  }

  supprimerArticle(index: number): void {
    if (this.articles.length > 1) {
      this.articles.removeAt(index);
    }
  }

  private ecouterCalculs(): void {
    this.articles.valueChanges.subscribe(() => {
      this.articles.controls.forEach((control) => {
        const group = control as FormGroup;
        const qte = group.get('quantite')?.value || 0;
        const pu = group.get('prix')?.value || 0;
        group.get('total')?.setValue(qte * pu, { emitEvent: false });
      });
    });
  }

  get totalArticles(): number {
    return this.articles.controls.reduce((sum, ctrl) => sum + (ctrl.get('quantite')?.value || 0), 0);
  }

  get totalGeneral(): number {
    let total = this.articles.controls.reduce((sum, ctrl) => {
      return sum + ((ctrl.get('quantite')?.value || 0) * (ctrl.get('prix')?.value || 0));
    }, 0);

    const promo = this.commandeForm.get('codePromo')?.value;
    if (this.commandeForm.get('codePromo')?.valid && promo === 'PROMO20') {
      total *= 0.8;
    }
    return total;
  }

  private validateurQuantiteTotale(control: AbstractControl): ValidationErrors | null {
    const arr = control.get('articles') as FormArray;
    if (!arr) return null;
    const total = arr.controls.reduce((sum, ctrl) => sum + (ctrl.get('quantite')?.value || 0), 0);
    return total > 50 ? { tropArticles: true } : null;
  }

  private validateurCodePromo(control: AbstractControl): Observable<ValidationErrors | null> {
    return timer(1000).pipe(
      map(() => {
        const code = control.value;
        if (!code) return null;
        return code === 'PROMO20' ? null : { codeInvalide: true };
      })
    );
  }

  onCommandeSubmit(): void {
    if (this.commandeForm.valid) {
      this.commandeAffichee = this.commandeForm.getRawValue();

      // Déclenchement de la notification de confirmation
      this.notificationMessage = "Votre commande a bien été enregistrée !";

      // Disparition automatique après 4 secondes
      setTimeout(() => {
        this.notificationMessage = null;
      }, 4000);
    }
  }
}