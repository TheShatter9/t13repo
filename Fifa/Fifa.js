// Edit your script here
//1. érték: Csapat neve (nev) 
//2. érték: Csapat helyezése (helyezes) 
//3. érték: Csapat helyének változása (valtozas) 
//4. érték: Csapat Pontszama (pont) 

const csapatAdat = [
    { nev: "Anglia", helyezes: 4, valtozas: 0, pont: 1662 },
    { nev: "Argentína", helyezes: 10, valtozas: 0, pont: 1614 },
    { nev: "Belgium", helyezes: 1, valtozas: 0, pont: 1752 },
    { nev: "Brazília", helyezes: 3, valtozas: -1, pont: 1719 },
    { nev: "Chile", helyezes: 17, valtozas: -3, pont: 1576 },
    { nev: "Dánia", helyezes: 14, valtozas: -1, pont: 1584 },
    { nev: "Franciaország", helyezes: 2, valtozas: 1, pont: 1725 },
    { nev: "Hollandia", helyezes: 13, valtozas: 3, pont: 1586 },
    { nev: "Horvátország", helyezes: 8, valtozas: -1, pont: 1625 },
    { nev: "Kolumbia", helyezes: 9, valtozas: -1, pont: 1622 },
    { nev: "Mexikó", helyezes: 12, valtozas: 0, pont: 1603 },
    { nev: "Németország", helyezes: 16, valtozas: -1, pont: 1580 },
    { nev: "Olaszország", helyezes: 15, valtozas: 1, pont: 1583 },
    { nev: "Peru", helyezes: 19, valtozas: 0, pont: 1551 },
    { nev: "Portugália", helyezes: 5, valtozas: 1, pont: 1643 },
    { nev: "Spanyolország", helyezes: 7, valtozas: 2, pont: 1631 },
    { nev: "Svájc", helyezes: 11, valtozas: 0, pont: 1604 },
    { nev: "Svédország", helyezes: 18, valtozas: 0, pont: 1560 },
    { nev: "Szenegál", helyezes: 20, valtozas: 0, pont: 1546 },
    { nev: "Uruguay", helyezes: 6, valtozas: -1, pont: 1639 }
];

function ranglista(vizsgaltTomb) {
    let csapatok = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        csapatok += 1;
    }
    return csapatok;
}
document.write("A ranglistán " + ranglista(csapatAdat) + " ország szerepel.<hr>");

function atlagPontszam(vizsgaltTomb) {
    let atlag = 0;
    let ossz = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        ossz += csapatAdat[i].pont;
        atlag = ossz / vizsgaltTomb.length
    }
    return atlag;
}
document.write("A csapatok átlag pontszáma: " + atlagPontszam(csapatAdat) + " pont.<hr>");

function atlagFeletti(vizsgaltTomb) {
    let tobbPont = atlagPontszam(vizsgaltTomb);
    let modositasok = [];
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].pont > tobbPont) {
            let atlagFelettiek = {
                nev: vizsgaltTomb[i].nev
            }
            modositasok.push(atlagFelettiek)
        }
    }
    return modositasok;
}
function ObjektumKiirato(eredmeny) {
    document.write("<table border=1><th colspan=2>Az átlag feletti csapatok:</th>");

    for (let i = 0; i < eredmeny.length; i++) {
        document.write("<tr>");
        document.write("<td>" + eredmeny[i].nev + "</td>");
        document.write("</tr>");
    }
    document.write("</table>")
}
ObjektumKiirato(atlagFeletti(csapatAdat));

function legtobbetJavito(vizsgaltTomb) {
    let javitoIndex = 0;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].valtozas > vizsgaltTomb[javitoIndex].valtozas) {
            javitoIndex = i;
        }
    }
    return javitoIndex;
}
let javitoIndex = legtobbetJavito(csapatAdat);
document.write("<hr>A legtöbbet javító csapat helyezése: " + csapatAdat[javitoIndex].helyezes);
document.write("<br>A legtöbbet javító csapat neve: " + csapatAdat[javitoIndex].nev);
document.write("<br>A legtöbbet javító csapat pontja: " + csapatAdat[javitoIndex].pont + "<hr>");

function megtalalhatoE(vizsgaltTomb) {
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == "Magyarország") {
            return true;
        }
    }
    return false;
}
let vanEMagyarorszagCsapat = megtalalhatoE(csapatAdat);

if (vanEMagyarorszagCsapat) {
    document.write("Magyarország megtalálható a csapatok között.");
}
else {
    document.write("Magyarország NEM található meg a csapatok között.<hr>");
}

function barmelyCsapat(vizsgaltTomb, csapatNeve) {
    let bennevanE = false;
    for (let i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i].nev == csapatNeve) {
            bennevanE = true;
        }
    }
    return bennevanE;
}
function bennevanEKiirato(bennevan, csapatNeve) {
    if (bennevan == true) {
        document.write(csapatNeve + " benne van a csapatok között.<br>")
    }
    else {
        document.write(csapatNeve + " NINCS benne a csapatok között.<br>")
    }
}

bennevanEKiirato(barmelyCsapat(csapatAdat, "Franciaország"), "Franciaország");
bennevanEKiirato(barmelyCsapat(csapatAdat, "Algíria"), "Algíria");
bennevanEKiirato(barmelyCsapat(csapatAdat, "Montenegró"), "Montenegró");
document.write("<hr>");
//Hatodik feladat próbálkozása
/*function helyzetStatisztika(vizsgaltTomb){
    let valtozasLista=[];
    for (let i=0;i<vizsgaltTomb.length;i++){
        let szerepelE=false;
            for(let j=0;j<valtozasLista.length;j++){
                if(valtozasLista[j]==vizsgaltTomb[i].valtozas){
                    szerepelE=true;
                }
            }
            if (szerepelE==false){
                valtozasLista.push(vizsgaltTomb[i].valtozas);
            }
    }
    return valtozasLista;
}

function helyezetMegszamlalo(vizsgaltTomb, valtozasLista){
    let valtozasMenny=[];
    for(let i=0;i<valtozasLista.length;i++){
        valtozasMenny.push(0);
    }
    for(let i=0;i<vizsgaltTomb.length;i++){
        for(let j=0;j<valtozasLista.length;i++){
            if(valtozasLista[j]==vizsgaltTomb[i].valtozas){
                valtozasMenny[j]++;
            }
        }
    }
    return valtozasMenny;
}
function StatisztikaKiirato(valtozasLista,valtozasMenny){
    document.write("<table border=1>");
    for (let i=0;i<valtozasLista.length;i++){
        document.write("<tr><th>"+valtozasLista[i]+"</th><td>"+valtozasMenny[i]+"</td></tr>");
    }
    document.write("</table>");
}
StatisztikaKiirato(helyzetStatisztika(csapatAdat),helyezetMegszamlalo(csapatAdat,helyzetStatisztika(csapatAdat)));
*/