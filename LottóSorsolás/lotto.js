/*
//Első verzió
//Probléma: nem szűröm az ismétlődést, akár egy szám többször is előfordulhat a "sorsolás" során...
function OtosLottoszamGeneratorV1() {
    let lottoSzamok = [];
    for (let i = 0; i < 5; i++) {
        let generaltSzam = Math.round(Math.random() * 89) + 1;
        lottoSzamok.push(generaltSzam);
    }
    return lottoSzamok;
}

//Második verzió:
//Probléma: Ha egy szám ismétlődik, akkor kevesebb kihúzott szám került a tömbbe, mert akkor léptet, ha az adott szám szerepelt már...
function OtosLottoszamGeneratorV2() {
    let lottoSzamok = [];
    for (let i = 0; i < 5; i++) {
        let generaltSzam = Math.round(Math.random() * 89) + 1;
        let szerepelE = false;
        for (let j = 0; j < lottoSzamok.length; j++) {
            if (generaltSzam == lottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            lottoSzamok.push(generaltSzam);
        }
    }
    return lottoSzamok;
}

//Harmadik verzió:
//Teljesen jó FOR CIKLUSSAL
function OtosLottoszamGeneratorV3() {
    let lottoSzamok = [];
    for (let i = 0; i < 5; i++) {
        let generaltSzam = Math.round(Math.random() * 89) + 1;
        let szerepelE = false;
        for (let j = 0; j < lottoSzamok.length; j++) {
            if (generaltSzam == lottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            lottoSzamok.push(generaltSzam);
        }
        else {
            i--;
        }

    }
    return lottoSzamok;
}
console.log("Bugos: Ismétlődés NINCS szűrve");
console.log(OtosLottoszamGeneratorV1());
console.log("Bugos: Kevesebb szám is lehet, ha ismétlődne valamelyik");
console.log(OtosLottoszamGeneratorV2());
console.log("For ciklusos megoldás");
console.log(OtosLottoszamGeneratorV3())

//Negyedik verzió:
//Teljesen jó WHILE CIKLUSSAL
function OtosLottoszamGeneratorV4() {
    let lottoSzamok = [];
    while (lottoSzamok.length < 5) {
        let generaltSzam = Math.round(Math.random() * 89) + 1;
        let szerepelE = false;
        for (let j = 0; j < lottoSzamok.length; j++) {
            if (generaltSzam == lottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            lottoSzamok.push(generaltSzam);
        }
    }
    return lottoSzamok;
}
console.log("While ciklusos megoldás");
console.log(OtosLottoszamGeneratorV4())

//Ötödik verzió:
//Includes beépített függvénnyel és WHILE CIKLUSSAL
function OtosLottoszamGeneratorV5() {
    let lottoSzamok = [];
    while (lottoSzamok.length < 5) {
        let generaltSzam = Math.round(Math.random() * 89) + 1;
        if (!lottoSzamok.includes(generaltSzam)) {
            lottoSzamok.push(generaltSzam);
        }
    }
    return lottoSzamok;
}
console.log("Includes beépített függvénnyel és WHILE CIKLUSSAL");
console.log(OtosLottoszamGeneratorV5())
*/

//Hatodik verzió:
//UNIVERZÁLIS LOTTÓSZÁM GENERÁTOR
let eddigiSzamok = {};
function UniverzalisLottoszamGenerator(szamokMennyisege, maxKihuzhatoSzam) {
    if (szamokMennyisege <= maxKihuzhatoSzam) {
        let lottoSzamok = [];
        while (lottoSzamok.length < szamokMennyisege) {
            let generaltSzam = Math.round(Math.random() * (maxKihuzhatoSzam - 1)) + 1;
            if (!lottoSzamok.includes(generaltSzam)) {
                lottoSzamok.push(generaltSzam);
            }
        }
        for (const szam of lottoSzamok) {
            if (eddigiSzamok[szam]) {
                eddigiSzamok[szam]++;
            } else {
                eddigiSzamok[szam] = 1;
            }
        }
        return lottoSzamok;
    } else {
        return "NEM megfelelő a függvény paraméterezése!"
    }
}
/*
console.log("rossz értékek, nagyobb a szám mennyiség mint az intervallum");
console.log(UniverzalisLottoszamGenerator(10, 4));

console.log("Pont annyi a szám mennyiség, mint az intervallum");
console.log(UniverzalisLottoszamGenerator(5, 5));

console.log("Skandináv lottó számok");
console.log(UniverzalisLottoszamGenerator(7, 35));

console.log("Öttös lottó számok");
console.log(UniverzalisLottoszamGenerator(5, 90));

console.log("Hatos lottó számok");
console.log(UniverzalisLottoszamGenerator(6, 45));

console.log("KENÓ számok");
console.log(UniverzalisLottoszamGenerator(10, 80));
*/
//Extra funkciók:


/*
- Aktuálisan kihúzott számokat vizulásan kiválasztani...("golyókkal megjeleníteni")
- Melyik számot hányszor húzták ki, valamilyen táblázatos vagy lista formában. Esetleg lottó típust is választani...
- Melyik volt a leggyakoribb és a legritkábban kihúzott szám
- Melyik volt a legkisebb és a legnagyobb kihúzott szám mind közül, és a terjedelem a számok között(legkisebb és a legnagyobb érték közötti különbség)
- Aktuálisan a legkisebb és a legnagyobb kihúzott szám, és a terjedelem a számok között(legkisebb és a legnagyobb érték közötti különbség)
- A táblázatos forma esetén, az aktuálisan "kihúzott számokat" más színnel jelölje meg...
- Találat számláló, a te számaid közül, mennyi szerepel és mennyi volt az eddig összes találatod(akár lebontva 1-5 találtra...)

*/

let legkisebbKihuzottSzam = null; // Globális változó a valaha kihúzott legkisebb szám tárolására

//ÖTÖS LOTTÓ

function OtosLottoSzamokKiir() {
    let generaltSzamokOtos = UniverzalisLottoszamGenerator(5, 90);
    generaltSzamokOtos.sort(function (a, b) {
        return a - b;
    });

    // Megjelenítjük a számokat
    let golyok = document.querySelectorAll(".golyokOtos");
    for (let i = 0; i < golyok.length; i++) {
        golyok[i].textContent = generaltSzamokOtos[i];
    }

    let maxErtek = Math.max(...generaltSzamokOtos);
    document.querySelector("#aktualisLegnagyobbOtos").innerHTML = maxErtek;

    let aktualisLegnagyobb = parseFloat(document.querySelector("#legnagyobbSzamOtos").innerHTML);
    if (maxErtek > aktualisLegnagyobb || isNaN(aktualisLegnagyobb)) {
        document.querySelector("#legnagyobbSzamOtos").innerHTML = maxErtek;
    }

    let aktualisLegkisebb = Math.min(...generaltSzamokOtos); // Az aktuális legkisebb szám meghatározása

    document.querySelector("#aktualisLegkisebbOtos").innerHTML = aktualisLegkisebb;

    // Ha még nem volt megadva valaha legkisebb szám, vagy a mostani kihúzott szám kisebb, mint az eddigi legkisebb, akkor frissítjük
    if (legkisebbKihuzottSzam === null || aktualisLegkisebb < legkisebbKihuzottSzam) {
        legkisebbKihuzottSzam = aktualisLegkisebb;
        document.querySelector("#legkisebbSzamOtos").textContent = legkisebbKihuzottSzam;
    }
}

function LegtobbszorKihuzottSzamOtos(lottoSzamok) {
    let leggyakoribb = null;
    let maxElofordulas = -Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] > maxElofordulas) {
            maxElofordulas = eddigiSzamok[szam];
            leggyakoribb = parseInt(szam);
        }
    }
    document.querySelector("#leggyakoribbSzamOtos").textContent = leggyakoribb;
}

function LegkevesebbszerKihuzottSzamOtos(lottoSzamok) {
    let legritkabb = null;
    let minElofordulas = Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] < minElofordulas) {
            minElofordulas = eddigiSzamok[szam];
            legritkabb = parseInt(szam);
        }
    }
    document.querySelector("#legritkabbSzamOtos").textContent = legritkabb;
}

let szamokTablaTestOtos = document.querySelector("#lottoSzamokOtos");
function TablazatFrissitesOtos() {
    szamokTablaTestOtos.innerHTML = "";
    // Iterálunk az eddig kihúzott számokon és csak azokat jelenítjük meg a táblázatban
    for (const [kulcs, elofordulas] of Object.entries(eddigiSzamok)) {
        // Ellenőrizzük, hogy a kulcs egy szám-e
        if (!isNaN(kulcs) && Number.isInteger(Number(kulcs))) {
            const sor = document.createElement("tr");
            const szamCella = document.createElement("td");
            const elofordulasCella = document.createElement("td");
            szamCella.textContent = kulcs;
            elofordulasCella.textContent = elofordulas;
            sor.appendChild(szamCella);
            sor.appendChild(elofordulasCella);
            szamokTablaTestOtos.appendChild(sor);
        }
    }
}

let otosLottoGomb = document.querySelector("#otosLotto");
otosLottoGomb.addEventListener("click", function () {
    OtosLottoSzamokKiir();
    LegtobbszorKihuzottSzamOtos(eddigiSzamok);
    LegkevesebbszerKihuzottSzamOtos(eddigiSzamok);
    TablazatFrissitesOtos();
});


//HATOS LOTTÓ

function HatosLottoSzamokKiir() {
    let generaltSzamokHatos = UniverzalisLottoszamGenerator(6, 45);
    generaltSzamokHatos.sort(function (a, b) {
        return a - b;
    });
    // Megjelenítjük a számokat
    let golyok = document.querySelectorAll(".golyokHatos");
    for (let i = 0; i < golyok.length; i++) {
        golyok[i].textContent = generaltSzamokHatos[i];
    }

    let maxErtek = Math.max(...generaltSzamokHatos);
    document.querySelector("#aktualisLegnagyobbHatos").innerHTML = maxErtek;

    let aktualisLegnagyobb = parseFloat(document.querySelector("#legnagyobbSzamHatos").innerHTML);
    if (maxErtek > aktualisLegnagyobb || isNaN(aktualisLegnagyobb)) {
        document.querySelector("#legnagyobbSzamHatos").innerHTML = maxErtek;
    }

    let aktualisLegkisebb = Math.min(...generaltSzamokHatos); // Az aktuális legkisebb szám meghatározása

    document.querySelector("#aktualisLegkisebbHatos").innerHTML = aktualisLegkisebb;

    // Ha még nem volt megadva valaha legkisebb szám, vagy a mostani kihúzott szám kisebb, mint az eddigi legkisebb, akkor frissítjük
    if (legkisebbKihuzottSzam === null || aktualisLegkisebb < legkisebbKihuzottSzam) {
        legkisebbKihuzottSzam = aktualisLegkisebb;
        document.querySelector("#legkisebbSzamHatos").textContent = legkisebbKihuzottSzam;
    }

}
function LegtobbszorKihuzottSzamHatos(lottoSzamok) {
    let leggyakoribb = null;
    let maxElofordulas = -Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] > maxElofordulas) {
            maxElofordulas = eddigiSzamok[szam];
            leggyakoribb = parseInt(szam);
        }
    }
    document.querySelector("#leggyakoribbSzamHatos").textContent = leggyakoribb;
}

function LegkevesebbszerKihuzottSzamHatos(lottoSzamok) {
    let legritkabb = null;
    let minElofordulas = Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] < minElofordulas) {
            minElofordulas = eddigiSzamok[szam];
            legritkabb = parseInt(szam);
        }
    }
    document.querySelector("#legritkabbSzamHatos").textContent = legritkabb;
}

let szamokTablaTestHatos = document.querySelector("#lottoSzamokHatos");
function TablazatFrissitesHatos() {
    szamokTablaTestHatos.innerHTML = "";
    // Iterálunk az eddig kihúzott számokon és csak azokat jelenítjük meg a táblázatban
    for (const [kulcs, elofordulas] of Object.entries(eddigiSzamok)) {
        // Ellenőrizzük, hogy a kulcs egy szám-e
        if (!isNaN(kulcs) && Number.isInteger(Number(kulcs))) {
            const sor = document.createElement("tr");
            const szamCella = document.createElement("td");
            const elofordulasCella = document.createElement("td");
            szamCella.textContent = kulcs;
            elofordulasCella.textContent = elofordulas;
            sor.appendChild(szamCella);
            sor.appendChild(elofordulasCella);
            szamokTablaTestHatos.appendChild(sor);
        }
    }
}

let hatosLottoGomb = document.querySelector("#hatosLotto");
hatosLottoGomb.addEventListener("click", function () {
    HatosLottoSzamokKiir();
    LegtobbszorKihuzottSzamHatos(eddigiSzamok);
    LegkevesebbszerKihuzottSzamHatos(eddigiSzamok);
    TablazatFrissitesHatos();
});
//KENÓ LOTTÓ

function KenoLottoSzamokKiir() {
    let generaltSzamokKeno = UniverzalisLottoszamGenerator(20, 80);
    generaltSzamokKeno.sort(function (a, b) {
        return a - b;
    });
    let golyok = document.querySelectorAll(".golyokKeno");
    for (let i = 0; i < golyok.length; i++) {
        golyok[i].textContent = generaltSzamokKeno[i];
    }

    let maxErtek = Math.max(...generaltSzamokKeno);
    document.querySelector("#aktualisLegnagyobbKeno").innerHTML = maxErtek;

    let aktualisLegnagyobb = parseFloat(document.querySelector("#legnagyobbSzamKeno").innerHTML);
    if (maxErtek > aktualisLegnagyobb || isNaN(aktualisLegnagyobb)) {
        document.querySelector("#legnagyobbSzamKeno").innerHTML = maxErtek;
    }

    let aktualisLegkisebb = Math.min(...generaltSzamokKeno); // Az aktuális legkisebb szám meghatározása

    document.querySelector("#aktualisLegkisebbKeno").innerHTML = aktualisLegkisebb;

    // Ha még nem volt megadva valaha legkisebb szám, vagy a mostani kihúzott szám kisebb, mint az eddigi legkisebb, akkor frissítjük
    if (legkisebbKihuzottSzam === null || aktualisLegkisebb < legkisebbKihuzottSzam) {
        legkisebbKihuzottSzam = aktualisLegkisebb;
        document.querySelector("#legkisebbSzamKeno").textContent = legkisebbKihuzottSzam;
    }

}
function LegtobbszorKihuzottSzamKeno(lottoSzamok) {
    let leggyakoribb = null;
    let maxElofordulas = -Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] > maxElofordulas) {
            maxElofordulas = eddigiSzamok[szam];
            leggyakoribb = parseInt(szam);
        }
    }
    document.querySelector("#leggyakoribbSzamKeno").textContent = leggyakoribb;
}

function LegkevesebbszerKihuzottSzamKeno(lottoSzamok) {
    let legritkabb = null;
    let minElofordulas = Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] < minElofordulas) {
            minElofordulas = eddigiSzamok[szam];
            legritkabb = parseInt(szam);
        }
    }
    document.querySelector("#legritkabbSzamKeno").textContent = legritkabb;
}

let szamokTablaTestKeno = document.querySelector("#lottoSzamokKeno");
function TablazatFrissitesKeno() {
    szamokTablaTestKeno.innerHTML = "";
    // Iterálunk az eddig kihúzott számokon és csak azokat jelenítjük meg a táblázatban
    for (const [kulcs, elofordulas] of Object.entries(eddigiSzamok)) {
        // Ellenőrizzük, hogy a kulcs egy szám-e
        if (!isNaN(kulcs) && Number.isInteger(Number(kulcs))) {
            const sor = document.createElement("tr");
            const szamCella = document.createElement("td");
            const elofordulasCella = document.createElement("td");
            szamCella.textContent = kulcs;
            elofordulasCella.textContent = elofordulas;
            sor.appendChild(szamCella);
            sor.appendChild(elofordulasCella);
            szamokTablaTestKeno.appendChild(sor);
        }
    }
}

let kenoLottoGomb = document.querySelector("#kenoLotto");
kenoLottoGomb.addEventListener("click", function () {
    KenoLottoSzamokKiir();
    LegtobbszorKihuzottSzamKeno(eddigiSzamok);
    LegkevesebbszerKihuzottSzamKeno(eddigiSzamok);
    TablazatFrissitesKeno();
});

//SKANDINÁV

function SkandinavLottoSzamokKiir() {
    let generaltSzamokSkandinav = UniverzalisLottoszamGenerator(7, 35);
    generaltSzamokSkandinav.sort(function (a, b) {
        return a - b;
    });
    let golyok = document.querySelectorAll(".golyokSkandinavKezi");
    for (let i = 0; i < golyok.length; i++) {
        golyok[i].textContent = generaltSzamokSkandinav[i];
    }

    let maxErtek = Math.max(...generaltSzamokSkandinav);
    document.querySelector("#aktualisLegnagyobbSkandinav").innerHTML = maxErtek;

    let aktualisLegnagyobb = parseFloat(document.querySelector("#legnagyobbSzamSkandinav").innerHTML);
    if (maxErtek > aktualisLegnagyobb || isNaN(aktualisLegnagyobb)) {
        document.querySelector("#legnagyobbSzamSkandinav").innerHTML = maxErtek;
    }

    let aktualisLegkisebb = Math.min(...generaltSzamokSkandinav); // Az aktuális legkisebb szám meghatározása

    document.querySelector("#aktualisLegkisebbSkandinav").innerHTML = aktualisLegkisebb;

    // Ha még nem volt megadva valaha legkisebb szám, vagy a mostani kihúzott szám kisebb, mint az eddigi legkisebb, akkor frissítjük
    if (legkisebbKihuzottSzam === null || aktualisLegkisebb < legkisebbKihuzottSzam) {
        legkisebbKihuzottSzam = aktualisLegkisebb;
        document.querySelector("#legkisebbSzamSkandinav").textContent = legkisebbKihuzottSzam;
    }

}
function LegtobbszorKihuzottSzamSkandinav(lottoSzamok) {
    let leggyakoribb = null;
    let maxElofordulas = -Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] > maxElofordulas) {
            maxElofordulas = eddigiSzamok[szam];
            leggyakoribb = parseInt(szam);
        }
    }
    document.querySelector("#leggyakoribbSzamSkandinav").textContent = leggyakoribb;
}

function LegkevesebbszerKihuzottSzamSkandinav(lottoSzamok) {
    let legritkabb = null;
    let minElofordulas = Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] < minElofordulas) {
            minElofordulas = eddigiSzamok[szam];
            legritkabb = parseInt(szam);
        }
    }
    document.querySelector("#legritkabbSzamSkandinav").textContent = legritkabb;
}

let szamokTablaTestSkandinav = document.querySelector("#lottoSzamokSkandinav");
function TablazatFrissitesSkandinav() {
    szamokTablaTestSkandinav.innerHTML = "";
    // Iterálunk az eddig kihúzott számokon és csak azokat jelenítjük meg a táblázatban
    for (const [kulcs, elofordulas] of Object.entries(eddigiSzamok)) {
        // Ellenőrizzük, hogy a kulcs egy szám-e
        if (!isNaN(kulcs) && Number.isInteger(Number(kulcs))) {
            const sor = document.createElement("tr");
            const szamCella = document.createElement("td");
            const elofordulasCella = document.createElement("td");
            szamCella.textContent = kulcs;
            elofordulasCella.textContent = elofordulas;
            sor.appendChild(szamCella);
            sor.appendChild(elofordulasCella);
            szamokTablaTestSkandinav.appendChild(sor);
        }
    }
}

let skandinavLottoGomb = document.querySelector("#skandinavLotto");
skandinavLottoGomb.addEventListener("click", function () {
    SkandinavLottoSzamokKiir();
    LegtobbszorKihuzottSzamSkandinav(eddigiSzamok);
    LegkevesebbszerKihuzottSzamSkandinav(eddigiSzamok);
    TablazatFrissitesSkandinav();
});

//EUROJACKPOT A SZÁMOK

function EuroJackpotLottoSzamokAKiir() {
    let generaltSzamokEuroJackpotA = UniverzalisLottoszamGenerator(5, 50);
    generaltSzamokEuroJackpotA.sort(function (a, b) {
        return a - b;
    });
    let golyok = document.querySelectorAll(".golyokEuroJackpotA");
    for (let i = 0; i < golyok.length; i++) {
        golyok[i].textContent = generaltSzamokEuroJackpotA[i];
    }

    let maxErtek = Math.max(...generaltSzamokEuroJackpotA);
    document.querySelector("#aktualisLegnagyobbEuroA").innerHTML = maxErtek;

    let aktualisLegnagyobb = parseFloat(document.querySelector("#legnagyobbSzamEuroA").innerHTML);
    if (maxErtek > aktualisLegnagyobb || isNaN(aktualisLegnagyobb)) {
        document.querySelector("#legnagyobbSzamEuroA").innerHTML = maxErtek;
    }

    let aktualisLegkisebb = Math.min(...generaltSzamokEuroJackpotA); // Az aktuális legkisebb szám meghatározása

    document.querySelector("#aktualisLegnagyobbEuroA").innerHTML = aktualisLegkisebb;

    // Ha még nem volt megadva valaha legkisebb szám, vagy a mostani kihúzott szám kisebb, mint az eddigi legkisebb, akkor frissítjük
    if (legkisebbKihuzottSzam === null || aktualisLegkisebb < legkisebbKihuzottSzam) {
        legkisebbKihuzottSzam = aktualisLegkisebb;
        document.querySelector("#legkisebbSzamEuroA").textContent = legkisebbKihuzottSzam;
    }

}
function LegtobbszorKihuzottSzamEuroA(lottoSzamok) {
    let leggyakoribb = null;
    let maxElofordulas = -Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] > maxElofordulas) {
            maxElofordulas = eddigiSzamok[szam];
            leggyakoribb = parseInt(szam);
        }
    }
    document.querySelector("#leggyakoribbSzamEuroA").textContent = leggyakoribb;
}

function LegkevesebbszerKihuzottSzamEuroA(lottoSzamok) {
    let legritkabb = null;
    let minElofordulas = Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] < minElofordulas) {
            minElofordulas = eddigiSzamok[szam];
            legritkabb = parseInt(szam);
        }
    }
    document.querySelector("#legritkabbSzamEuroA").textContent = legritkabb;
}

let szamokTablaTestEuroA = document.querySelector("#lottoSzamokEuroA");
function TablazatFrissitesEuroA() {
    szamokTablaTestEuroA.innerHTML = "";
    // Iterálunk az eddig kihúzott számokon és csak azokat jelenítjük meg a táblázatban
    for (const [kulcs, elofordulas] of Object.entries(eddigiSzamok)) {
        // Ellenőrizzük, hogy a kulcs egy szám-e
        if (!isNaN(kulcs) && Number.isInteger(Number(kulcs))) {
            const sor = document.createElement("tr");
            const szamCella = document.createElement("td");
            const elofordulasCella = document.createElement("td");
            szamCella.textContent = kulcs;
            elofordulasCella.textContent = elofordulas;
            sor.appendChild(szamCella);
            sor.appendChild(elofordulasCella);
            szamokTablaTestEuroA.appendChild(sor);
        }
    }
}

let euroALottoGomb = document.querySelector("#euroJackpotLotto");
euroALottoGomb.addEventListener("click", function () {
    EuroJackpotLottoSzamokAKiir();
    LegtobbszorKihuzottSzamEuroA(eddigiSzamok);
    LegkevesebbszerKihuzottSzamEuroA(eddigiSzamok);
    TablazatFrissitesEuroA();
});

function EuroJackpotLottoSzamokBKiir() {
    let generaltSzamokEuroJackpot = UniverzalisLottoszamGenerator(2, 12);
    generaltSzamokEuroJackpot.sort(function (a, b) {
        return a - b;
    });
    let golyok = document.querySelectorAll(".golyokEuroJackpotB");
    for (let i = 0; i < golyok.length; i++) {
        golyok[i].textContent = generaltSzamokEuroJackpot[i];
    }

    let maxErtek = Math.max(...generaltSzamokEuroJackpot);
    document.querySelector("#aktualisLegnagyobbEuroB").innerHTML = maxErtek;

    let aktualisLegnagyobb = parseFloat(document.querySelector("#legnagyobbSzamEuroB").innerHTML);
    if (maxErtek > aktualisLegnagyobb || isNaN(aktualisLegnagyobb)) {
        document.querySelector("#legnagyobbSzamEuroB").innerHTML = maxErtek;
    }

    let aktualisLegkisebb = Math.min(...generaltSzamokEuroJackpot); // Az aktuális legkisebb szám meghatározása

    document.querySelector("#aktualisLegnagyobbEuroB").innerHTML = aktualisLegkisebb;

    // Ha még nem volt megadva valaha legkisebb szám, vagy a mostani kihúzott szám kisebb, mint az eddigi legkisebb, akkor frissítjük
    if (legkisebbKihuzottSzam === null || aktualisLegkisebb < legkisebbKihuzottSzam) {
        legkisebbKihuzottSzam = aktualisLegkisebb;
        document.querySelector("#legkisebbSzamEuroB").textContent = legkisebbKihuzottSzam;
    }

}
function LegtobbszorKihuzottSzamEuroB(lottoSzamok) {
    let leggyakoribb = null;
    let maxElofordulas = -Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] > maxElofordulas) {
            maxElofordulas = eddigiSzamok[szam];
            leggyakoribb = parseInt(szam);
        }
    }
    document.querySelector("#leggyakoribbSzamEuroB").textContent = leggyakoribb;
}

function LegkevesebbszerKihuzottSzamEuroB(lottoSzamok) {
    let legritkabb = null;
    let minElofordulas = Infinity;
    for (const szam in eddigiSzamok) {
        if (eddigiSzamok[szam] < minElofordulas) {
            minElofordulas = eddigiSzamok[szam];
            legritkabb = parseInt(szam);
        }
    }
    document.querySelector("#legritkabbSzamEuroB").textContent = legritkabb;
}

let szamokTablaTestEuroB = document.querySelector("#lottoSzamokEuroB");
function TablazatFrissitesEuroB() {
    szamokTablaTestEuroB.innerHTML = "";
    // Iterálunk az eddig kihúzott számokon és csak azokat jelenítjük meg a táblázatban
    for (const [kulcs, elofordulas] of Object.entries(eddigiSzamok)) {
        // Ellenőrizzük, hogy a kulcs egy szám-e
        if (!isNaN(kulcs) && Number.isInteger(Number(kulcs))) {
            const sor = document.createElement("tr");
            const szamCella = document.createElement("td");
            const elofordulasCella = document.createElement("td");
            szamCella.textContent = kulcs;
            elofordulasCella.textContent = elofordulas;
            sor.appendChild(szamCella);
            sor.appendChild(elofordulasCella);
            szamokTablaTestEuroB.appendChild(sor);
        }
    }
}

let euroBLottoGomb = document.querySelector("#euroJackpotLotto");
euroBLottoGomb.addEventListener("click", function () {
    EuroJackpotLottoSzamokBKiir();
    LegtobbszorKihuzottSzamEuroB(eddigiSzamok);
    LegkevesebbszerKihuzottSzamEuroB(eddigiSzamok);
    TablazatFrissitesEuroB();
});









document.addEventListener("DOMContentLoaded", function () {
    FeladatMutat(0); // Csak az ötös lottószámokat jelenítjük meg kezdetben
});

function FeladatMutat(feladatAzonosito) {
    for (let i = 0; i <= 5; i++) {
        let blokk = document.querySelector(`#LottoSzamok0${i}Blokk`);
        if (blokk) {
            if (i !== feladatAzonosito) {
                blokk.style.display = "none";
            } else {
                blokk.style.display = "block";
            }
        }
    }
}


//NAVIGÁCIÓS BÁR-T MŰKÖDTETŐ
function F0mutat() {
    FeladatMutat(0);
}
let g0event = document.querySelector("#g0");
g0event.addEventListener("click", F0mutat);

function F1mutat() {
    FeladatMutat(1);
}
let g1event = document.querySelector("#g1");
g1event.addEventListener("click", F1mutat);

function F2mutat() {
    FeladatMutat(2);
}
let g2event = document.querySelector("#g2");
g2event.addEventListener("click", F2mutat);

function F3mutat() {
    FeladatMutat(3);
}
let g3event = document.querySelector("#g3");
g3event.addEventListener("click", F3mutat);

function F4mutat() {
    FeladatMutat(4);
}
let g4event = document.querySelector("#g4");
g4event.addEventListener("click", F4mutat);

