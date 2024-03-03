aktivalo.addEventListener("click", mindenCheck);

function mindenCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = true;
    }
}

deaktivalo.addEventListener("click", mindenUnCheck);

function mindenUnCheck() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = false;
    }
}

//Szorgalmi: Próbáld meg egy gomra rakni a két funkciót, 
//illetve megoldani, hogy a kijelöléseket megfordítsa
let aktivalBeKi = document.getElementById("aktivalBeKi");
aktivalBeKi.addEventListener("click", mindenBeKiAktival);

function mindenBeKiAktival() {
    let elemLista = document.querySelectorAll(".allapot");
    for (let i = 0; i < elemLista.length; i++) {
        elemLista[i].checked = !elemLista[i].checked;
    }
}



//Szorgalmi: Megoldani, hogy egy gombon legyen a sávozás ki-be kapcsolása
let savozasBeKi = document.getElementById("savozasBeki");
savozasBeKi.addEventListener("click", mindenSavBeKi);

function mindenSavBeKi() {
    let kivalasztottTabla = document.querySelector("table");
    if (kivalasztottTabla.classList.contains("table-striped")) {
        kivalasztottTabla.classList.remove("table-striped");
    }
    else {
        kivalasztottTabla.classList.add("table-striped");
    }
}


csikozasBe.addEventListener("click", SavozasBe);

function SavozasBe() {
    let kivalasztottTabla = document.querySelector("table");
    kivalasztottTabla.classList.add("table-striped");
}


csikozasKi.addEventListener("click", SavozasKi);

function SavozasKi() {
    document.querySelector("table").classList.remove("table-striped");
}



//Szorgalmi: Megoldani, hogy egy gombon legyen a light és dark mód közötti váltás.
let darkLigthBeKi = document.getElementById("darkLigthBeKi");
darkLigthBeKi.addEventListener("click", mindenDarkLigthBeKi);

function mindenDarkLigthBeKi() {
    let kivalasztottTabla = document.querySelector("table");
    if (kivalasztottTabla.classList.contains("table-dark")) {
        kivalasztottTabla.classList.remove("table-dark");
        kivalasztottTabla.classList.add("table-light");
    }
    else {
        kivalasztottTabla.classList.remove("table-light");
        kivalasztottTabla.classList.add("table-dark");
    }
}


darkMode.addEventListener("click", DarkMode);
function DarkMode() {
    let kivalasztottTabla = document.querySelector("table");
    kivalasztottTabla.classList.remove("table-light");
    kivalasztottTabla.classList.add("table-dark");
}

lightMode.addEventListener("click", LightMode);
function LightMode() {
    let kivalasztottTabla = document.querySelector("table");
    kivalasztottTabla.classList.remove("table-dark");
    kivalasztottTabla.classList.add("table-light");
}



tesztSor.addEventListener("click", TesztSorBeszuras);

function TesztSorBeszuras() {
    let kivalasztottTabla = document.querySelector("table");//kiválasztom a táblát
    let sor = kivalasztottTabla.insertRow(-1);//beleillesztek egy sort a táblába
    let vezNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let kerNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let emailCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let telefonCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let beosztasCella = sor.insertCell();//Beszúrom a szükséges cellákat
    let aktivalCella = sor.insertCell();//Beszúrom a szükséges cellákat

    vezNevCella.innerHTML = "teszt";
    kerNevCella.innerHTML = "teszt";
    emailCella.innerHTML = "teszt";
    telefonCella.innerHTML = "teszt";
    beosztasCella.innerHTML = "teszt";
    aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";


    ujElemFeltolto.addEventListener("click", UjSorBeszuras);

    function UjSorBeszuras() {
        let kivalasztottTabla = document.querySelector("table");//kiválasztom a táblát
        let sor = kivalasztottTabla.insertRow(-1);//beleillesztek egy sort a táblába
        let vezNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
        let kerNevCella = sor.insertCell();//Beszúrom a szükséges cellákat
        let emailCella = sor.insertCell();//Beszúrom a szükséges cellákat
        let telefonCella = sor.insertCell();//Beszúrom a szükséges cellákat
        let beosztasCella = sor.insertCell();//Beszúrom a szükséges cellákat
        let aktivalCella = sor.insertCell();//Beszúrom a szükséges cellákat

        vezNevCella.innerHTML = document.querySelector("#vezNev").value;
        kerNevCella.innerHTML = document.querySelector("#kerNev").value;
        emailCella.innerHTML = document.querySelector("#email").value;
        telefonCella.innerHTML = document.querySelector("#tel").value;
        beosztasCella.innerHTML = document.querySelector("#beosztas").value;
        aktivalCella.innerHTML = "<input type=\"checkbox\" class=\"allapot\">";

    }
}

//Szorgalmi: Próbálj validációt készíteni, ajánlom a REGEX-et :)

