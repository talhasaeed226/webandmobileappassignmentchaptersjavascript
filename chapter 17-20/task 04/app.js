var tableNumber = prompt("Enter a number"),
    numberLength = prompt("Enter a table number length");
document.write("Multiplication table of: " + tableNumber + "<br>");
document.write("Length:  " + numberLength + "<br>");
for (var i = 1; i <= numberLength; i++) {
    document.write(tableNumber + " x " + i + " = " + tableNumber * i + "<br>")
}