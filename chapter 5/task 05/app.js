var num = prompt("Table number")
document.write("Table of:" + num + "<br>")
for (var i = 1; i <= 10; i++) {
    var result = num * i;
    document.write(num + "x" + i + "=" + result + "<br>")
}
num = 5;
for (var j = 1; j <= 10; j++) {
    var result1 = num1 * j;
    document.write(num1 + "x" + j + "=" + result1 + "<br>")
}