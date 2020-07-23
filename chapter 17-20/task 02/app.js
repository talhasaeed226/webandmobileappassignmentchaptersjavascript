var myArray = new Array(3);
for (var i = 0; i < 4; i++) {
    myArray[i] = new Array(3);
}
myArray[0][0] = 0;
myArray[0][1] = 1;
myArray[0][2] = 2;
myArray[0][3] = 3;
myArray[1][0] = 1;
myArray[1][1] = 0;
myArray[1][2] = 1;
myArray[1][3] = 2;
myArray[2][0] = 2;
myArray[2][1] = 1;
myArray[2][2] = 0;
myArray[2][3] = 1;
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 4; j++) {
        document.write(myArray[i][j] + "&emsp;");
    }
    document.write("<br>")
}