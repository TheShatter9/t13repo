//TUPLE - Rendezett N-es
var tupleMinta: [string, number];
tupleMinta = ["Békés Csaba", 65];

tupleMinta[0] = "Minta Márton";
tupleMinta[1] = 27;

console.log(tupleMinta[0]); //Minta Márton fog megjelenni mert felülírtuk

//Gyakorlati példa
function NegyzetKeruletTerulet(aOldal: number): [number, number] {
    let kerulet = aOldal * 4;
    let terulet = aOldal * aOldal;
    return [kerulet, terulet];
}

//ENUM
enum fizetesTipusok {
    juniorFrontEnd = 600000,
    juniorBackEnd = 650000,
    juniorFullStack = 700000,
    seniorFrontEnd = 1400000,
    seniorBackEnd = 1600000,
    seniorFullStack = 2000000
}
//Hivatkozást segíti konstas(ÁLLANDÓ ÉRTÉKEKRE)
var jozsiFizetes: fizetesTipusok = fizetesTipusok.juniorFrontEnd;


enum oldalSzinei {
    menuSzin = "#faf445",
    navbarSzin = "#546372",
    footerSzin = "#acf231"
}

let ujszin: oldalSzinei = oldalSzinei.menuSzin;
//document.body.style.backgroundColor=oldalSzinei.menuSzin;


//INTERFACE
interface Dolgozo {
    nev: string;
    eletkor: number;
    aktiv: boolean;
}

var interfaceObjektum: Dolgozo = {
    nev: "Kis József",
    eletkor: 33,
    aktiv: true
}

var masikInterfaceObjektum: Dolgozo = { nev: "Alka Ida", eletkor: 20, aktiv: false }


//Gyakorlati példa

interface FifaAdat {
    nev: string;
    helyezes: number;
    valtozas: number;
    pont: number;
}

const csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];
function ObjektumFeltolto(feltoltendoElem: string[]): FifaAdat[] {
    let beolvasottAdatok: FifaAdat[] = [];
    for (let i = 0; i < feltoltendoElem.length; i++) {
        let daraboltAdatok = feltoltendoElem[i].split(";");
        let ujCsapat: FifaAdat = {
            nev: daraboltAdatok[0],
            helyezes: Number(daraboltAdatok[1]),
            valtozas: Number(daraboltAdatok[2]),
            pont: Number(daraboltAdatok[3])
        }
        beolvasottAdatok.push(ujCsapat);
    }
    return beolvasottAdatok;
}
const csapatok: FifaAdat[] = ObjektumFeltolto(csapatAdat);
console.log(csapatok);

//1. Feladat
function CsapatokSzama(vizsgaltTomb: string[]): number {
    return vizsgaltTomb.length
}

console.log("A ranglistában szereplő csapatok száma: " + CsapatokSzama(csapatAdat));


//2. Feladat
function PontSzamokAtlaga(vizsgaltTomb: FifaAdat[]): number {
    let osszeg: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i].pont;
    }
    return Math.round(osszeg / vizsgaltTomb.length);
}

console.log("A ranglistában szereplő csapatok átlag pontszáma: " + PontSzamokAtlaga(csapatok));

//3. Feladat
function atlagFelettiekNeve(vizsgaltTomb: FifaAdat[]): string[] {
    let atlag: number = PontSzamokAtlaga(csapatok);
    let atlagFelettiek: string[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].pont > atlag) {
            atlagFelettiek.push(vizsgaltTomb[i].nev)
        }
    }
    return atlagFelettiek;
}
console.log(atlagFelettiekNeve(csapatok));

//4. Feladat
function LegtobbetJavitoCsapatIndex(vizsgaltTomb: FifaAdat[]): [string, number, number, number] {
    let csapatIndexe: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > vizsgaltTomb[csapatIndexe].valtozas) {
            csapatIndexe = i;
        }
    }
    return [vizsgaltTomb[csapatIndexe].nev, vizsgaltTomb[csapatIndexe].helyezes, vizsgaltTomb[csapatIndexe].valtozas, vizsgaltTomb[csapatIndexe].pont];
}

const legtobbetJavitoCsapat = LegtobbetJavitoCsapatIndex(csapatok);
console.log("A legtöbbet javító csapat Neve: " + legtobbetJavitoCsapat[0]);
console.log("Helyezése: " + legtobbetJavitoCsapat[1]);
console.log("Változása: " + legtobbetJavitoCsapat[2]);
console.log("Pontszáma: " + legtobbetJavitoCsapat[3]);

//5. Feladat
function SzerepelEMagyarorszag(vizsgaltTomb: FifaAdat[]): boolean {
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == "Magyarország") {
            return true;
        }
    }
    return false;
}

function SzerepelEKiir(vizsgaltEredmeny: boolean): void {
    if (vizsgaltEredmeny == true) {
        console.log("Az országok között szerepel Magyarország");
    }
    else {
        console.log("Az országok között NEM szerepel Magyarország");
    }
}

SzerepelEKiir(SzerepelEMagyarorszag(csapatok));

//6. Feladat
function ValtozasStatisztika(vizsgaltTomb: FifaAdat[]): number[] {
    let valtozasTipusok: number[] = [];
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        let szerepelE: boolean = false;
        for (let j: number = 0; j < valtozasTipusok.length; j++) {
            if (vizsgaltTomb[i].valtozas == valtozasTipusok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            valtozasTipusok.push(vizsgaltTomb[i].valtozas);
        }
    }
    return valtozasTipusok;
}

console.log(ValtozasStatisztika(csapatok));