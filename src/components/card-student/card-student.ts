import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Etudiant } from '../../Models/etudiant-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-student',
  imports: [CommonModule],
  templateUrl: './card-student.html',
  styleUrl: './card-student.css',
})
export class CardStudent {
  @Input() etudiant: Etudiant = {
    id:0,
    nom: '',
    prenom: '',
    classe:'',
    notes:[]
  };

  @Input() moyenne: number = 0;
  @Output() delete = new EventEmitter<number>();
  @Input() badge: string = ''; 
  @Input() cardcolor: string = ''; 
  status:string="Reussite";

 

  


  supprimer_etudiant() {
    this.delete.emit(this.etudiant.id);

  }

}
