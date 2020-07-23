var enterPass = prompt("Enter Password"),
    password = 'Giveme5';
if (enterPass === "") {
    alert("Please enter your password")
} else if (enterPass === password) {
    alert("Correct! The password you entered matches the original password")
} else if (enterPass != password) {
    alert("Incorrect Password")
}