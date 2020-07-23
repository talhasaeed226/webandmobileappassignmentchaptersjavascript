var a = prompt("Price of 1 item")
var b = prompt("Ordered Quantity of 1 item")
var c = prompt("Price of 2 item")
var d = prompt("Ordered Quantity of 2 item")
var shipCharge = prompt("Shipping Charges");
var e = a * b;
var f = c * d;
var g = e + f + (+shipCharge);
document.write("<h1><b>Shopping Cart<b></h1><br>")
document.write("Price of item 1 :" + a + "<br>")
document.write("Ordered quantity of item 1 :" + b + "<br>")
document.write("Price of item 2 :" + c + "<br>")
document.write("Ordered quantity of item 2: " + d + "<br>")
document.write("Shipping Charges: " + shipCharge + "<br>")
document.write("Total cost of your order is :" + g)