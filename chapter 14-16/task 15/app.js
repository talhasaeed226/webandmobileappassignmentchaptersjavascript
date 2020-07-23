var mobile = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>")
for (var i = 0; i < mobile.length; i++) {

    document.write("<option>" + mobile[i] + " </option>")
}
document.write("</select>")