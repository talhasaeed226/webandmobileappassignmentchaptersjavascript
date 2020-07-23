var num1 = prompt("Enter number or string")
if (num1 == 65 || num1 == 90 || num1 == 97 || num1 == 122) {
    alert("Input is a number")
} else if (num1 == "A" || num1 == "Z") {
    alert("Input is a Uppercase letter")
} else if (num1 == "z" || num1 == "z") {
    alert("Input is a lowercase letter")
}