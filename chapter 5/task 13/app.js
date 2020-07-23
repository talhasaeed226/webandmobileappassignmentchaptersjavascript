var a = prompt("Enter your favourite snacks"),
    b = prompt("enter your current age"),
    c = prompt("Enter your maximum age"),
    d = prompt("Amounts of snacks per day"),
    e = (c - b) * d;
document.write("<h1><b>The Lifetime Supply Calculator</b></h1><br>")
document.write("Favourite Snack: " + a + "<br>" + "Current age: " + b + "<br>" + "Estimated Maximum age: " + c + "<br>" + "Amount of snacks per day: " + d + "<br>" + "You will need " + e + " to last you until the ripe old age of " + c)