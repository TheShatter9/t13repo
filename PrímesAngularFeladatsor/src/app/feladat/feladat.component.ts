import { Component } from '@angular/core';

@Component({
  selector: 'app-feladat',
  templateUrl: './feladat.component.html',
  styleUrl: './feladat.component.css'
})
export class FeladatComponent {
  prim!: number;
  eredmenyek: string[] = [];
  aktualis!: string;
  EredmenyMentes() {
    if (this.prim == null) {
      alert("A mező kitöltése kötelező!");
      return;
    }
    const vizsgaltSzam = this.prim;
    const primE = this.ellenorzes(vizsgaltSzam);
    const eredmeny = `${vizsgaltSzam} ${primE ? 'prím' : 'NEM prím'}`;
    this.eredmenyek.push(eredmeny);
    this.aktualis = eredmeny;
  }

  ellenorzes(num: number): boolean {
    if (num <= 1) return false;
    if (num == 2) return true;
    if (num % 2 == 0) return false;
    for (let i = 3; i < Math.sqrt(num); i += 2) {
      if (num % i == 0) return false;
    }
    return true;
  }
}
