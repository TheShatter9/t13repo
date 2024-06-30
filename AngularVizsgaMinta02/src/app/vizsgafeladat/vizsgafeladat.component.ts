import { Component } from '@angular/core';

@Component({
  selector: 'app-vizsgafeladat',
  templateUrl: './vizsgafeladat.component.html',
  styleUrl: './vizsgafeladat.component.css'
})
export class VizsgafeladatComponent {
  html!: number;
  bootstrap!: number;
  javaScript!: number;
  typeScript!: number;
  angular!: number;
  server!: number;

  uzenet!: string;

  eredmenyek: string[] = [];

  EredmenyMentes() {
    if (this.html == null || this.bootstrap == null || this.javaScript == null ||
      this.typeScript == null || this.angular == null || this.server == null) {
      alert("Az összes mező kitöltése kötelező!");
      return;
    }

    const vizsgaltSzam = this.html + this.bootstrap + this.javaScript + this.typeScript + this.angular + this.server;
    if (vizsgaltSzam < 50) {
      this.uzenet = `Sikertelen vizsga, szerzett pont: ${vizsgaltSzam}`;
    } else if (vizsgaltSzam >= 50 && vizsgaltSzam <= 59) {
      this.uzenet = `Sikeres vizsga (2-es), szerzett pont: ${vizsgaltSzam}`;
    } else if (vizsgaltSzam >= 60 && vizsgaltSzam <= 69) {
      this.uzenet = `Sikeres vizsga (3-as), szerzett pont: ${vizsgaltSzam}`;
    } else if (vizsgaltSzam >= 70 && vizsgaltSzam <= 79) {
      this.uzenet = `Sikeres vizsga (4-es), szerzett pont: ${vizsgaltSzam}`;
    } else {
      this.uzenet = `Sikeres vizsga (5-ös), szerzett pont: ${vizsgaltSzam}`;
    }

    this.eredmenyek.push(this.uzenet);
  }

}



