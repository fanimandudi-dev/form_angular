import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Count {
  count:number = 0;
  increment() {
    this.count++;
    console.log('Count incremented:', this.count);


  }

  getcount(): number {
    return this.count;
  }

  null() {
   return this.count = 0;
    
  }
}