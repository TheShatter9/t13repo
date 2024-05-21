
function FuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny, fuggvenyhivas) {

    //Tábla elemek létrehozása
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    //Teszt paraméterek megadása és megjelenítése
    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = `${fuggvenyhivas}`
    if (elvartEredmeny == fuggvenyhivas) {
        visszajelzesMezo.innerHTML = `Success`;
    }
    else {
        visszajelzesMezo.innerHTML = `Fail`;
    }
}

//Hibás referencia érték esetén lefutó függvény
function HibasFuggvenyFuggvenyVisszajelzoSor(tesztNeve, adatBe, elvartEredmeny) {
    var table = document.querySelector("#testTable");
    var adatSor = table.insertRow(1);
    var tesztNeveMezo = adatSor.insertCell(0);
    var bemenetMezo = adatSor.insertCell(1);
    var elvartEredmenyMezo = adatSor.insertCell(2);
    var fuggvenyEredmenyMezo = adatSor.insertCell(3)
    var visszajelzesMezo = adatSor.insertCell(4)

    tesztNeveMezo.innerHTML = `${tesztNeve}`;
    bemenetMezo.innerHTML = `${adatBe}`;
    elvartEredmenyMezo.innerHTML = `${elvartEredmeny}`;
    fuggvenyEredmenyMezo.innerHTML = "Fail";
    visszajelzesMezo.innerHTML = "Fail";
}

function Teszt01() {
    try {
        FuggvenyVisszajelzoSor("Ékezetes betűk száma", "Szeretem a programozást", 1, EkezetesBetukSzama("Szeretem a programozást"));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Ékezetes betűk száma", "Szeretem a programozást", 1);
    }
}


function Teszt02() {
    try {
        FuggvenyVisszajelzoSor("Ékezetes betűk száma", "Sose bízd emberre egy komputer munkáját.", 3, EkezetesBetukSzama("Sose bízd emberre egy komputer munkáját."));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Ékezetes betűk száma", "Sose bízd emberre egy komputer munkáját.", 3);
    }
}


function Teszt03() {
    try {
        FuggvenyVisszajelzoSor("Ékezetes betűk száma", "Nem félek a számítógépektől, a hiányuktól félek.", 9, EkezetesBetukSzama("Nem félek a számítógépektől, a hiányuktól félek."));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Ékezetes betűk száma", "Nem félek a számítógépektől, a hiányuktól félek.", 9);
    }
}





function Teszt04() {
    try {
        FuggvenyVisszajelzoSor("Első N szám szorzata (faktoriális)", 3, 6, ElsoNszamSzorzat(3));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Első N szám szorzata (faktoriális)", 3, 6);
    }
}


function Teszt05() {
    try {
        FuggvenyVisszajelzoSor("Első N szám szorzata (faktoriális)", 5, 120, ElsoNszamSzorzat(5));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Első N szám szorzata (faktoriális)", 5, 120);
    }
}


function Teszt06() {
    try {
        FuggvenyVisszajelzoSor("Első N szám szorzata (faktoriális)", 6, 720, ElsoNszamSzorzat(6));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Első N szám szorzata (faktoriális)", 6, 720);
    }
}





function Teszt07() {
    try {
        FuggvenyVisszajelzoSor("Páros számok összege egy tömbben", [12, 3, 21, 4, 6], 22, ParosakOsszege([12, 3, 21, 4, 6]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páros számok összege egy tömbben", [12, 3, 21, 4, 6], 22);
    }
}

function Teszt08() {
    try {
        FuggvenyVisszajelzoSor("Páros számok összege egy tömbben", [1, 2, 3, 4, 5, 6], 12, ParosakOsszege([1, 2, 3, 4, 5, 6]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páros számok összege egy tömbben", [1, 2, 3, 4, 5, 6], 12);
    }
}


function Teszt09() {
    try {
        FuggvenyVisszajelzoSor("Páros számok összege egy tömbben", [11, 23, 35, 42, 51, 63], 42, ParosakOsszege([11, 23, 35, 42, 51, 63]));
    }
    catch {
        HibasFuggvenyFuggvenyVisszajelzoSor("Páros számok összege egy tömbben", [11, 23, 35, 42, 51, 63], 42);
    }
}
function TesztFuttato() {
    Teszt01();
    Teszt02();
    Teszt03();
    Teszt04();
    Teszt05();
    Teszt06();
    Teszt07();
    Teszt08();
    Teszt09();
}
TesztFuttato();