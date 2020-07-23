var num1 = prompt("Enter First Number"),
    op = prompt("Enter Operator +,-,*,/,%"),
    num2 = prompt("Enter Second Number");

if (op == '+') {
    alert("Result is; " + ((+num1) + (+num2)))
} else
if (op == '-') {
    alert("Result is: " + (num1 - num2))
} else if (op == '*') {
    alert("Result is: " + (num1 * num2))
} else if (op == '/') {
    alert("Result is: " + (num1 / num2))
} else if (op == '%') {
    alert("Result is: " + (num1 % num2))
}