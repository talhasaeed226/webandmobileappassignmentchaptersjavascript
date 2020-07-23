var totalMarks = prompt("Enter Total Marks"),
    marksObtained = prompt("Enter Obtained Marks"),
    percentage = (marksObtained / totalMarks) * 100;
document.write("<h1><b>Marks Sheet</b></h1><br>" + "Total Marks: " + totalMarks + "<br>Marks Obtained: " + marksObtained + "<br>Percentage: " + percentage + "%<br>")
if (percentage >= 80) {
    document.write("Grade: A-one<br> Remarks: Excellent")
} else if (percentage >= 70) {
    document.write("Grade: A<br> Remarks: Good")
} else if (percentage >= 60) {
    document.write("Grade: B<br> Remarks: You need to improve")
} else if (percentage < 80) {
    document.write("Grade: Fail<br> Remarks: Sorry")
}