function Beolvaso(): string {
    let szam: string = prompt("Kérem a TAJ-számot: ");
    while (!/^\d{9}$/.test(szam)) {
        szam = prompt("Érvénytelen TAJ-szám. Kérem a TAJ-számot (9 jegyű szám): ");
    }
    return szam;
}

function tajSzamEllenorzo(szam: string): { ervenyes: boolean; osszeg: number } {
    const szorzo = [3, 7];
    let osszeg = 0;

    for (let i = 0; i < 8; i++) {
        osszeg += parseInt(szam.charAt(i)) * szorzo[i % 2];
    }

    const ellenorzoSzam = osszeg % 10;
    const ervenyes = ellenorzoSzam === parseInt(szam.charAt(8));

    return { ervenyes, osszeg };
}

let tajSzam = Beolvaso();
let { ervenyes, osszeg } = tajSzamEllenorzo(tajSzam);
let ellenorzoSzam = tajSzam.charAt(8);

console.log(`Kérem a TAJ-számot: ${tajSzam}`);
console.log(`Az ellenőrzőszámjegy: ${ellenorzoSzam}`);
console.log(`A szorzatok osszege: ${osszeg}`);
if (ervenyes) {
    console.log(`Helyes szám!`);
} else {
    console.log(`Hibás szám!`);
}
