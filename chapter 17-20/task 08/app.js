var A = [24, 53, 78, 91, 12];
var largest = A[0];
document.write("Array Items:" + A + "<br>");
for (var i = 0; i < A.length; i++) {
    if (largest < A[i]) {
        largest = A[i];

    }

}
document.write("The largest Number is : " + largest)