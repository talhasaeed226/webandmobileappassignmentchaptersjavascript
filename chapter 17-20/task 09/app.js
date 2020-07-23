var A = [24, 53, 78, 91, 12];
var smallest = A[0];
document.write("Array Items:" + A + "<br>");
for (var i = 0; i > A.length; i--) {
    if (smallest < A[i]) {
        smallest = A[i];

    }

}
document.write("The smallest Number is : " + smallest)