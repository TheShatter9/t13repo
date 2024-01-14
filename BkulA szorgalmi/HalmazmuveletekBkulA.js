let aHalmaz = [];
for (let i = 0; i < 5; i++) {
    aHalmaz.push(Math.round(Math.random() * 10));
}
document.write(aHalmaz);
document.write("<hr>");

let bHalmaz = [];
for (let i = 0; i < 5; i++) {
    bHalmaz.push(Math.round(Math.random() * 10));
}
document.write(bHalmaz);
document.write("<hr>");

let BkulA = [];
for (let j = 0; j < bHalmaz.length; j++) {
    let vanEgyezes = false;
    for (let i = 0; i < aHalmaz.length; i++) {
        if (bHalmaz[j] == aHalmaz[i]) {
            vanEgyezes = true;
        }
    }
    if (vanEgyezes == false) {
        let szerepelE = false;
        for (let k = 0; k < BkulA.length; k++) {
            if (bHalmaz[j] == BkulA[k]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            BkulA.push(bHalmaz[j]);
        }
    }
}
document.write("<br>B különbség A halmaz:");
document.write(BkulA);