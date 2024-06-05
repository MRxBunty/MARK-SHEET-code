let urduMarks = 90;
let sstMarks = 80;
let englishMarks = 85;
let totalMarks = 350;
let obtainMarks = urduMarks + sstMarks + englishMarks;
let percentage = (obtainMarks / totalMarks) * 100;
console.log("Mark Sheet:");
console.log("Urdu Marks:", urduMarks);
console.log("SST Marks:", sstMarks);
console.log("English Marks:", englishMarks);
console.log("Total Marks:", totalMarks);
console.log("Obtain Marks:", obtainMarks);
console.log("Percentage:", percentage.toFixed(2) + "%");
let grade;
if (percentage >= 80) {
    grade = "A+";
}
else if (percentage >= 70) {
    grade = "A";
}
else if (percentage >= 60) {
    grade = "B";
}
else if (percentage >= 50) {
    grade = "C";
}
else if (percentage >= 40) {
    grade = "D";
}
else {
    grade = "Fail";
}
console.log("Grade:", grade);
// message as your perfomance
switch (grade) {
    case "A+":
        console.log("Congratulations! You have performed exceptionally well.");
        break;
    case "A":
        console.log("Well done! Your performance is outstanding.");
        break;
    case "B":
        console.log("Good job! Keep up the good work.");
        break;
    case "C":
        console.log("You have passed, but there's room for improvement.");
        break;
    case "D":
        console.log("You need to work harder to improve your grades.");
        break;
    default:
        console.log("Sorry, you have failed. Better luck next time.");
        break;
}
export {};
