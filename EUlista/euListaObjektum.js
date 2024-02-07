const EuropaiUnio = [{
    orszag: "Ausztria",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Belgium",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Bulgária",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Ciprus",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Csehország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Dánia",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Egyesült Királyság",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Észtország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Finnország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Franciaország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Görögország",
    csatlakozas: "1981.01.01"
},
{
    orszag: "Hollandia",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Horvátország",
    csatlakozas: "2013.07.01"
},
{
    orszag: "Írország",
    csatlakozas: "1973.01.01"
},
{
    orszag: "Lengyelország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Lettország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Litvánia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Luxemburg",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Magyarország",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Málta",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Németország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Olaszország",
    csatlakozas: "1958.01.01"
},
{
    orszag: "Portugália",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Románia",
    csatlakozas: "2007.01.01"
},
{
    orszag: "Spanyolország",
    csatlakozas: "1986.01.01"
},
{
    orszag: "Svédország",
    csatlakozas: "1995.01.01"
},
{
    orszag: "Szlovákia",
    csatlakozas: "2004.05.01"
},
{
    orszag: "Szlovénia",
    csatlakozas: "2004.05.01"
}
]

function hanyEuTag(vizsgaltTomb) {
    let tagok = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        tagok += 1;
    }
    return tagok;
}
document.write("Az EU-nak " + hanyEuTag(EuropaiUnio) + " tagja van.<hr>");

function mikorCsatlakozott(vizsgaltTomb) {
    let csatlakoz = 0;

    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let csatlakozasiEv = parseInt(vizsgaltTomb[i].csatlakozas.split('.')[0], 10);
        if (csatlakozasiEv === 2007) {
            csatlakoz += 1;
        }
    }
    return csatlakoz;
}
document.write("Az EU-ba " + mikorCsatlakozott(EuropaiUnio) + " ország csatlakozott 2007-ben.<hr>");

function csatlakozottEHun(vizsgaltTomb) {
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].orszag == "Magyarország") {
            return true;
        }
    }
    return false;
}
document.write("Magyarország csatlakozott ez UNIO-hoz? " + csatlakozottEHun(EuropaiUnio) + "<hr>");

function majusCsatlakozas(vizsgaltTomb) {
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let majus = parseInt(vizsgaltTomb[i].csatlakozas.split('.')[1], 10);
        if (majus === 05) {
            return true;
        }
    }
    return false;
}
document.write("Az EU-ban van olyan ország, amely májusában csatlakozott: " + majusCsatlakozas(EuropaiUnio) + "<hr>");

function utoljaraCsatlakozott(vizsgaltTomb) {
    let utoljaraCsatlakozottIndex = 0;
    for (let i = 1; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].csatlakozas > vizsgaltTomb[utoljaraCsatlakozottIndex].csatlakozas) {
            utoljaraCsatlakozottIndex = i;
        }
    }
    return utoljaraCsatlakozottIndex;
}
let utoljaraKeresoIndex = utoljaraCsatlakozott(EuropaiUnio)
document.write("Az utoljára EU-ba csatlakozott ország: " + EuropaiUnio[utoljaraKeresoIndex].orszag);
document.write("<br>Az utoljára EU-ba csatlakozott ország csatlakozásának dátuma: " + EuropaiUnio[utoljaraKeresoIndex].csatlakozas + "<hr>");

function melyikEvbenHanyan(vizsgaltTomb) {
    let mikor = {};
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        let csatlakozasiEv = parseInt(vizsgaltTomb[i].csatlakozas.split('.')[0], 10);
        if (mikor[csatlakozasiEv]) {
            mikor[csatlakozasiEv]++;
        }
        else {
            mikor[csatlakozasiEv] = 1;
        }
    }
    return mikor;
}
let mikorHanyan = melyikEvbenHanyan(EuropaiUnio);
document.write("Az országok statisztikája: " + EuropaiUnio[mikorHanyan]);