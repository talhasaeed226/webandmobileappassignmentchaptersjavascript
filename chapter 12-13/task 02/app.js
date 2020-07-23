var num = prompt("Enter 1st number"),
    num1 = prompt("Enter 2nd number")
if (num > num1) {
    alert("This number " + num + " is larger then " + num1)
} else if (num1 > num) {
    alert("This number " + num1 + " is larger then " + num)
} else if (num === num1) {
    alert("This number " + num1 + " is equal to " + num)
}