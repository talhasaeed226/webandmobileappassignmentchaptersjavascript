//task 01
// var firstName = prompt("Enter First name"),
//     lastName = prompt("Enter last name"),
//     fullName = firstName + " " + lastName;
// alert("Full Name: " + fullName)

//task 02

// var favModel = prompt("Enter your favourite Model");
// var len = favModel.length;
// document.write("My favourite Model is :" + favModel + "<br>" + "Length of String:" + len);

//task 03

// var name = ['Pakistani'],
//     index = name.indexOf('n');
// document.write("String: " + name + "<br>" + "Index of 'n': " + index)

//task 04

// var name = ['Hello World'],
//     index = name.indexOf("l", 9);
// document.write("String: " + name + "<br>" + "Last Index of 'l': " + index)

//task 05

// var name = ['Pakistani'],
//     char = name.charAt(3)
// document.write("String: " + name + "<br>" + "Character of index 3: " + char)

//task 06
// var firstName = prompt("Enter First name"),
//     lastName = prompt("Enter last name"),
//     fullName = firstName.concat(lastName)
// alert("Full Name: " + fullName)

//task 07

// var cite = "Hyderabad",
//     first = cite.slice(5, 9),
//     replace = 'Islam';

// alert(replace + first)



//task 08

// var message = 'Ali and Sami are best friends.They play cricket and football together.';

// var new1 = message.replace(/and/g, " & ");
// document.write(new1)

//task 09

// var value = "472",
//     str = String(value),
//     strValue = typeof str,
//     nbr = Number(value),
//     nbrValue = typeof nbr;

// document.write("Value= " + value + "<br>" + "Type: " + strValue + "<br>" + "Value= " + value + "<br>" +
//     "Type:" + nbrValue)

//task 10


// var name = prompt("Enter name"),
//     convert = name.toUpperCase();
// document.write("Name=" + name + "<br>" + "Uppercase= " + convert)

//task 11

// var name = prompt("User input"),
//     convert = name.titleCase();
// document.write("User Input: " + name + "<br>" + "Title case: " + convert)


//task 12
// var num = 35.67,
//     str = num.toString(),
//     str1 = str.replace('.', '')
// document.write("Number= " + num + "<br>" + "String= " + str1)


//task 13



// var userName = prompt("Enter your Input: ");
// checkValidName(userName);

// function checkValidName(un) {
//     var message;
//     var split = [];
//     var arr = [];
//     for (var i = 0; i < un.length; i++) {
//         split[i] = un.split("&nbsp;");
//         arr[i] = un.charCodeAt(i);
//         if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) {
//             message = "Correct User Name";
//         }
//         while (arr[i] == 33 || arr[i] == 44 || arr[i] == 46 || arr[i] == 64) {
//             alert("please enter a valid userName");
//             userName = prompt("Enter your Input: ");
//             split[i] = un.split("&nbsp;");
//             arr[i] = un.charCodeAt(i);
//             if (arr[i] != 33 || arr[i] != 44 || arr[i] != 46 || arr[i] != 64) {
//                 message = "correct in";
//                 break;
//             }
//         }

//     }
//     alert(message);
// }



//task 14

// var bakery = prompt("Enter the item");
// bakery = bakery.toLocaleLowerCase();
// bakery = bakery.toLowerCase();
// bakery = bakery.toUpperCase();
// bakery = bakery.toLocaleUpperCase();
// var array = ['cake', 'apple pie', 'cookie', 'chip', 'patties'];
// for (var i = 0; i < array.length; i++) {
//     if (array[i] === bakery) {
//         alert("This  is available  in Bakery ")
//     } else {
//         alert("This  is not available in Bakery")
//     }
// }

//task 15

var pass = prompt("Enter Password"),
    len = pass.length;
var lowerCase = /[a-z]/g,
    UpperCase = /[A-Z]/g,
    numbers = /[0-9]/g;
if (len >= 6 && len === UpperCase) {
    alert("Enter good password")
} else {
    alert("Pussword less then 6 digits")
}