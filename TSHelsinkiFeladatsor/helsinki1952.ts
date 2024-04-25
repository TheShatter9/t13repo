const helsinki: string[] = [
    "1 1 atletika kalapacsvetes",
    "1 1 uszas 400m_gyorsuszas",
    "1 1 birkozas kotott_fogas_legsuly",
    "1 1 torna talajtorna",
    "1 1 torna felemas_korlat",
    "1 1 vivas kardvivas_egyeni",
    "1 1 okolvivas nagyvaltosuly",
    "1 1 uszas 200m_melluszas",
    "1 1 birkozas kotott_fogas_valtosuly",
    "1 1 uszas 100m_gyorsuszas",
    "1 1 sportloveszet onmukodo_sportpisztoly",
    "1 15 labdarugas ferfi_csapat",
    "1 3 ottusa ferfi_csapat",
    "1 6 vivas kardvivas_csapat",
    "1 5 uszas 4x100m_gyorsuszo_valto",
    "1 13 vizilabda ferfi_csapat",
    "2 1 ottusa ottusa_egyeni",
    "2 1 vivas torvivas_egyeni",
    "2 1 vivas kardvivas_egyeni",
    "2 1 sportloveszet onmukodo_sportpisztoly",
    "2 1 uszas 400m_gyorsuszas",
    "2 1 uszas 200m_melluszas",
    "2 1 kajakkenu kenu_egyes_10000m",
    "2 1 kajakkenu kajak_egyes_1000m",
    "2 1 birkozas kotott_fogas_pehelysuly",
    "2 8 torna noi_osszetett_csapat",
    "3 1 sportloveszet sportpisztoly",
    "3 1 vivas kardvivas_egyeni",
    "3 1 atletika tavolugras",
    "3 1 birkozas szabad_fogas_kozepsuly",
    "3 1 torna felemas_korlat",
    "3 1 torna osszetett_egyeni",
    "3 1 torna gerenda",
    "3 1 torna talajtorna",
    "3 1 atletika kalapacsvetes",
    "3 1 atletika 50km_gyaloglas",
    "3 1 ottusa ottusa_egyeni",
    "3 1 uszas 100m_gyorsuszas",
    "3 4 atletika 4x100m_valtofutas",
    "3 2 kajakkenu kenu_kettes_10000m",
    "3 8 torna keziszer_csapat",
    "3 6 vivas torvivas_csapat",
    "4 1 torna gerenda",
    "4 1 uszas 200m_mell",
    "4 1 birkozas kotottfogas_felnehezsuly",
    "4 1 torna talaj",
    "4 1 birkozas kotottfogas_kozepsuly",
    "4 1 birkozas kotottfogas_konnyusuly",
    "5 1 okolvivas pehelysuly",
    "5 1 okolvivas konnyusuly",
    "5 1 uszas 100m_gyors",
    "5 1 atletika diszkoszvetes",
    "5 1 vivas parbajtor_egyeni",
    "5 2 kajak-kenu kenu_kettes_1000m",
    "5 2 kerekparozas ketuleses_verseny",
    "5 4 uszas 4x200m_gyorsvalto",
    "5 5 vivas parbajtor_csapat",
    "6 1 birkozas kotottfogas_legsuly",
    "6 1 kajak-kenu kajak_egyes_500m",
    "6 1 torna osszetett_egyeni",
    "6 1 kerekparozas repuloverseny",
    "6 1 uszas 400m_gyors",
    "6 1 torna felemaskorlat",
    "6 8 torna osszetett_csapat"
];

interface OlimpiaAdat {
    helyezes: number;
    sportolokSzama: number;
    sportag: string;
    versenyszam: string;
}

function ObjektumFeltolto(feltoltendoElem: string[]): OlimpiaAdat[] {
    let beolvasottAdatok: OlimpiaAdat[] = [];
    for (let i: number = 0; i < feltoltendoElem.length; i++) {
        let darabolAdat = feltoltendoElem[i].split(" ");
        let versenyzok: OlimpiaAdat = {
            helyezes: Number(darabolAdat[0]),
            sportolokSzama: Number(darabolAdat[1]),
            sportag: darabolAdat[2],
            versenyszam: darabolAdat[3]
        }
        beolvasottAdatok.push(versenyzok);
    }
    return beolvasottAdatok;
}
const olimpiaAdatok: OlimpiaAdat[] = ObjektumFeltolto(helsinki);


//3. Feladat
function PontszerzoHelyezes(vizsgaltTomb: OlimpiaAdat[]): number {
    return vizsgaltTomb.length;
}

function PontszerzoHelyezesKiir(kiirandoErtek: number): void {
    console.log("A pontszerző helyezések száma: " + kiirandoErtek + " db.")
}
PontszerzoHelyezesKiir(PontszerzoHelyezes(olimpiaAdatok));

//4. Feladat
function MegszerzettErmek(vizsgaltTomb: OlimpiaAdat[]): { arany: number; ezust: number; bronz: number } {
    let arany: number = 0;
    let ezust: number = 0;
    let bronz: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].helyezes == 1) {
            arany++;
        }
        else if (vizsgaltTomb[i].helyezes == 2) {
            ezust++;
        }
        else if (vizsgaltTomb[i].helyezes == 3) {
            bronz++;
        }
    }
    return { arany, ezust, bronz };
}

function MegszerzettErmekKiir(kiirandoErtek: { arany: number; ezust: number; bronz: number }): void {
    console.log("Arany: " + kiirandoErtek.arany);
    console.log("Ezüst: " + kiirandoErtek.ezust);
    console.log("Bronz: " + kiirandoErtek.bronz);
}
const ermek: { arany: number; ezust: number; bronz: number } = MegszerzettErmek(olimpiaAdatok);
MegszerzettErmekKiir(ermek);

//5. Feladat
function OlimpiaiPontok(vizsgaltTomb: OlimpiaAdat[]): number {
    let osszeg: number = 0;
    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].helyezes == 1) {
            osszeg += 7;
        }
        else if (vizsgaltTomb[i].helyezes == 2) {
            osszeg += 5;
        }
        else if (vizsgaltTomb[i].helyezes == 3) {
            osszeg += 4;
        }
        else if (vizsgaltTomb[i].helyezes == 4) {
            osszeg += 3;
        }
        else if (vizsgaltTomb[i].helyezes == 5) {
            osszeg += 2;
        }
        else if (vizsgaltTomb[i].helyezes == 6) {
            osszeg += 1;
        }
    }
    return osszeg;
}

function OlimpiaiPontokKiir(kiirandoErtek: number): void {
    console.log("Olimpiai pontok száma: " + kiirandoErtek);
}
OlimpiaiPontokKiir(OlimpiaiPontok(olimpiaAdatok));

//6. Feladat
function LegtobbErem(vizsgaltTomb: OlimpiaAdat[]): string {
    let atletika: number = 0;

    for (let i: number = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].sportag =)
    }

}

function LegtobbEremKiir(kiirandoErtek: string): void {
    console.log(kiirandoErtek + " sportágban szereztek több érmét.")
}
LegtobbEremKiir(LegtobbErem(olimpiaAdatok));