//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

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

function objektumFeltolto(feltontendoElem) {
    let beolvasottAdatok = [];
    for (let i = 0; i < feltontendoElem.length; i++) {
        let objektum = {};
        let daraboltAdatSor = feltontendoElem[i].split(";");
        objektum.nev = daraboltAdatSor[0];
        objektum.helyezes = Number(daraboltAdatSor[1]);
        objektum.valtozas = Number(daraboltAdatSor[2]);
        objektum.pont = Number(daraboltAdatSor[3]);
        beolvasottAdatok.push(objektum);
    }
    return beolvasottAdatok;
}
const fifaAdatok = objektumFeltolto(csapatAdat);



//Első feladat - Adja meg aktuálisan hány csapat szerepel a ranglistán
function CsapatokSzama(vizsgaltTomb) {
    return vizsgaltTomb.length;
}

function CsapatokSzamaKiir(csapatSzam) {
    document.querySelector("#f1").innerHTML = "A FIFA csapatok száma: " + csapatSzam + "db.";
}
CsapatokSzamaKiir(CsapatokSzama(fifaAdatok));

//Mádosik feladat - Írja ki mennyi a résztvevő csapatok átlagpontszáma
function CsapatokAtlagPont(vizsgaltTomb) {
    let osszeg = 0;
    for (i = 0; i < vizsgaltTomb.length; i++) {
        osszeg += vizsgaltTomb[i].pont;
    }
    return Math.round(osszeg / vizsgaltTomb.length);
}

function CsapatokAtlagPontKiir() {
    let atlagPontszam = CsapatokAtlagPont(fifaAdatok);
    document.querySelector("#f2").innerHTML = "A csapatok átlagpontszáma: " + atlagPontszam + " pont."
}

let f2eventGomb = document.querySelector("#f2feladat");
f2eventGomb.addEventListener("click", CsapatokAtlagPontKiir);

//Harmadik feladat - Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!
function CsapatokAtlagFelett(vizsgaltTomb) {
    let atlagPont = CsapatokAtlagPont(fifaAdatok);
    let atlagFelettiek = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].pont > atlagPont) {
            atlagFelettiek.push(vizsgaltTomb[i]);
        }
    }
    return atlagFelettiek;
}

function CsapatokAtlagFelettKiir() {
    let atlagFelettiek = CsapatokAtlagFelett(fifaAdatok);
    let table = document.querySelector("#f3");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    for (let i = 0; i < atlagFelettiek.length; i++) {
        let csapat = table.insertRow(1);
        let nev = csapat.insertCell(0);
        let pont = csapat.insertCell(1);
        nev.innerHTML = atlagFelettiek[i].nev;
        pont.innerHTML = atlagFelettiek[i].pont;
    }
}
let f3eventGomb = document.querySelector("#f3feladat");
f3eventGomb.addEventListener("click", CsapatokAtlagFelettKiir);

//Negyedik feladat - Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma
function LegtobbetJavitoCsapat(vizsgaltTomb) {
    let legtobbetJavito = vizsgaltTomb[0];
    for (let i = 1; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > legtobbetJavito.valtozas) {
            legtobbetJavito = vizsgaltTomb[i];
        }
    }
    return legtobbetJavito;
}

function LegtobbetJavitoCsapatKiir() {
    let LegtobbetJavitott = LegtobbetJavitoCsapat(fifaAdatok);
    let eredmeny = document.querySelector("#f4");

    eredmeny.innerHTML = `<u>A legtöbbet javító csapat adatai: </u><br>
    Helyezés: ${LegtobbetJavitott.helyezes}<br>
    Csapatnév: ${LegtobbetJavitott.nev}<br>
    Pontszáma: ${LegtobbetJavitott.pont}`;
}

let f4eventGomb = document.querySelector("#f4feladat");
f4eventGomb.addEventListener("click", LegtobbetJavitoCsapatKiir);

//Ötödik feladat - Határozza meg a adatok között megtalálható-e Magyarország csapata!
function SzerepeltEMagyarorszag(vizsgaltTomb, csapatNeve) {
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev === csapatNeve) {
            return true;
        }
    }
    return false;
}

function SzerepeltEMagyarorszagKiir() {
    let magyarOrszag = "Magyarország";
    let vanEMagyarorszag = SzerepeltEMagyarorszag(fifaAdatok, magyarOrszag);
    if (vanEMagyarorszag) {
        document.querySelector("#f5").innerHTML = `${magyarOrszag} tagja a FIFA csapatainak.`
    }
    else {
        document.querySelector("#f5").innerHTML = `${magyarOrszag} NEM tagja a FIFA csapatainak.`
    }
}

let f5eventGomb = document.querySelector("#f5feladat");
f5eventGomb.addEventListener("click", SzerepeltEMagyarorszagKiir);

//Fejlesztési lehetőség
function CsapatKivalaszto() {
    let csapatNev = document.querySelector("#szerepelE").value;
    return csapatNev;
}

function BenneVanE(vizsgaltTomb, csapatNeve) {
    let benneVanE = false;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == csapatNeve) {
            benneVanE = true;
        }
    }
    return benneVanE;
}

function BenneVanEKiir() {
    let adottCsapat = CsapatKivalaszto();
    let benneVoltE = BenneVanE(fifaAdatok, adottCsapat);
    if (benneVoltE == true) {
        document.querySelector("#f5fl").innerHTML = `${adottCsapat} szerepel a FIFA csapatai között.`;
    }
    else {
        document.querySelector("#f5fl").innerHTML = `${adottCsapat} NEM szerepel a FIFA csapatai között.`;
    }
}

let f5fleventGomb = document.querySelector("#f5flfeladat");
f5fleventGomb.addEventListener("click", BenneVanEKiir);