function SzerkeszhetoHaromszog(aOldal, bOldal, cOldal) {
    if (aOldal + bOldal > cOldal && aOldal + cOldal > bOldal && bOldal + cOldal > aOldal) {
        return true;
    }
    else {
        return false;
    }
}

document.write(SzerkeszhetoHaromszog(2, 2, 3));
document.write("<hr>");
document.write(SzerkeszhetoHaromszog(7, 5, 2));
document.write("<hr>");