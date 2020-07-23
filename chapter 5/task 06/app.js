var c1 = prompt("Enter Temperature in Celsius")
var f1 = (c1 * (9 / 5)) + 32;
document.write(c1 + "<sup>" + 0 + "</sup>" + "C" + " is " + f1 + "<sup>" + 0 + "</sup>F" + "<br>")
var f2 = prompt("Enter Temperature in Farhenheit")
var c2 = (f2 - 32) * (5 / 9);
document.write(f2 + "<sup>" + 0 + "</sup>F" + " is " + c2 + "<sup>" + 0 + "</sup>C")