//a and b
var color1 = prompt("Enter color name"),
    color2 = prompt("Enter color name");
var color = ["red", "yellow", "green", "violet"];
color.unshift(color1)
color.push(color2)
document.write(color + "<br><br>")
    //c
var color = ["red", "yellow", "green", "violet"];
color.unshift('pink')
color.unshift('black')
document.write(color + "<br><br>")
    //d
var color = ["red", "yellow", "green", "violet"];
color.shift()
document.write(color + "<br><br>")
    //e
var color = ["red", "yellow", "green", "violet"];
color.pop()
document.write(color + "<br><br>")
    //f
var color1 = prompt("Enter color name"),
    index = prompt("Enter index number"),
    add = prompt("how many enter colors")
var color = ["red", "yellow", "green", "violet"];
color.splice(index, add, color1)
document.write(color + "<br><br>")
    //g
var index = prompt("Enter index number"),
    add = prompt("how many delete colors");
var color = ["red", "yellow", "green", "violet"];
color.splice(index, add, " ")
document.write(color + "<br><br>")