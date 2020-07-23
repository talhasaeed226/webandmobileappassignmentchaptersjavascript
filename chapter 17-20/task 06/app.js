//a
document.write("Counting: ")
for (var i = 0; i <= 15; i++) {
    document.write(i + ",")
}
//b

document.write("<br>Reverse Counting: ")
for (var j = 10; j >= 0; j--) {
    document.write(j + ",")
}
//c
document.write("<br>Even: ")
for (var c = 0; c <= 20; c++) {
    if (c % 2 == 0) {
        document.write(c + ",")

    }
}

//d
document.write("<br>Odd: ")
for (var d = 1; d <= 20; d += 2) {
    document.write(d + ",")
}
document.write("<br>Series: ")
for (var c = 2; c <= 20; c++) {
    if (c % 2 == 0) {
        document.write(c + "k,")

    }
}