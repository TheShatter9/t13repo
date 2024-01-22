function NegyzetKerulet(aOldal) {
    return aOldal * 4;
}
function NegyzetTerulet(aOldal) {
    return aOldal * aOldal;
}

function EredmenyKiirato(aOldal) {
    let kerulet = NegyzetKerulet(aOldal);
    document.write(`A négyzet kerülete ${aOldal} számmal: ${kerulet}`);

    let terulet = NegyzetTerulet(aOldal);
    document.write(`<br>A négyzet területe ${aOldal} számmal: ${terulet}`);
}

EredmenyKiirato(5);