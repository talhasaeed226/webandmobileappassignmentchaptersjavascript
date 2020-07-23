var guessNumber = prompt("Enter Guess Number"),
    secretNumber = 4;
if (secretNumber == guessNumber) {
    alert("Bingo! Correct answer")
} else if (guessNumber === '+1') {
    alert("Close enough to the correct answer")
} else {
    alert("Wrong answer")
}