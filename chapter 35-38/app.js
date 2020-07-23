//task 01
// function date(a) {
//     alert(a)
// }
// var a = new Date();
// date(a)


//task 02


// function name(first, last) {
//     alert(fullName)
// }

// var first = prompt("Enter First Name"),
//     last = prompt("Enter Last Name"),
//     fullName = first + " " + last;
// name(fullName)

//task 03


// function add(a, b) {
//     alert(c)
// }
// var a = prompt("Enter 1st num"),
//     b = prompt("Enter 2nd num"),
//     c = (+a) + (+b);

// add(c)


//task 04

// function calc(num1, num2, op) {
//     alert(result)
// }


// var num1 = prompt("Enter 1st num"),
//     op = prompt("Enter operator"),
//     num2 = prompt("Enter 2nd num");



// if (op == '+') {
//     result = (+num1) + (+num2);
// } else
// if (op == '-') {
//     result = num1 - num2;
// } else if (op == '*') {
//     result = num1 * num2;
// } else if (op == '/') {
//     result = num1 / num2;
// }
// calc(result)


//task 05


// function square(a) {
//     alert(result)
// }

// var a = prompt("Enter number"),
//     result = a * a;
// square(result)


//task 06

// function factorial(n) {
//     var answer = 1;
//     if (n == 0 || n == 1) {
//         return answer;
//     } else {
//         for (var i = n; i >= 1; i--) {
//             answer = answer * i;
//         }
//         return answer;
//     }
// }
// var n = prompt("Enter number");
// answer = factorial(n)
// alert("The factorial of " + n + " is " + answer);


//task 07


// function count(a, b) {
//     var a = prompt("Enter first number"),
//         b = prompt("Enter last number");


//     for (var c = a; c <= b; c++) {
//         var result;
//         result += c;

//     }
//     document.write(result + "<br>")
// }

// count()

//task 08


// function calculateHypotaneous() {


//     var h, c

//     function calculateSquare() {
//         var b = prompt("Enter Base"),
//             p = prompt("Enter perpendivular");
//         c = (+b * b) + (+p * p);

//     }
//     calculateSquare()

//     h = c * c;
//     alert("The Hypotaneous of right triangle is: " + h)
// }
// calculateHypotaneous()


//task 09

// function triangle() {
//     var width = prompt("Enter width"),
//         height = prompt("Enter height"),
//         result = width * height;
//     alert("The area of triangle is " + result)
// }
// triangle()


//task 10




// function palindrome(a) {
//     return true;

// }
// palindrome("eye")


// //task 11

// function uppercase(str) {
//     var str = prompt("Enter text");
//     var array1 = str.split(' ');
//     var newarray1 = [];

//     for (var x = 0; x < array1.length; x++) {
//         newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
//     }
//     return newarray1.join(' ');
// }
// alert(uppercase());


//task 12

// function findLongest(str) {
//     var str = prompt("Enter a sentence")
//     var array1 = str.match(/\w[a-z]{0,}/gi);
//     var result = array1[0];

//     for (var x = 1; x < array1.length; x++) {
//         if (result.length < array1[x].length) {
//             result = array1[x];
//         }
//     }
//     return result;
// }
// alert(findLongest());

//task 13


// function name(str, letter) {
//     var str = prompt("Enter a letter"),
//         letter = 'a',
//         letter1 = 0;
//     for (var a = 0; a < str.length; a++) {
//         if (str.charAt(a) == letter) {
//             letter1 += 1;
//         }
//     }
//     return letter1
// }
// alert(name())


//task 14


function calcCircumference() {

    var a = prompt("Enter radius of a circle"),
        b = 2 * 3.142 * a;
    alert("The Circumference is : " + b)

    function area() {
        var c = prompt("Enter area based radius "),
            d = 3.142 * c * c;
        alert("Area of a circle :" + d)
    }
    area()
}
calcCircumference()