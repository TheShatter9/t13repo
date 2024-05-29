function Beolvaso() {
    var szam = prompt("Kérem a TAJ-számot: ");
    while (!/^\d{9}$/.test(szam)) {
        szam = prompt("Érvénytelen TAJ-szám. Kérem a TAJ-számot (9 jegyű szám): ");
    }
    return szam;
}
function tajSzamEllenorzo(szam) {
    var szorzo = [3, 7];
    var osszeg = 0;
    for (var i = 0; i < 8; i++) {
        osszeg += parseInt(szam.charAt(i)) * szorzo[i % 2];
    }
    var ellenorzoSzam = osszeg % 10;
    var ervenyes = ellenorzoSzam === parseInt(szam.charAt(8));
    return { ervenyes: ervenyes, osszeg: osszeg };
}
var tajSzam = Beolvaso();
var _a = tajSzamEllenorzo(tajSzam), ervenyes = _a.ervenyes, osszeg = _a.osszeg;
var ellenorzoSzam = tajSzam.charAt(8);
console.log("K\u00E9rem a TAJ-sz\u00E1mot: ".concat(tajSzam));
console.log("Az ellen\u0151rz\u0151sz\u00E1mjegy: ".concat(ellenorzoSzam));
console.log("A szorzatok osszege: ".concat(osszeg));
if (ervenyes) {
    console.log("Helyes sz\u00E1m!");
}
else {
    console.log("Hib\u00E1s sz\u00E1m!");
}
