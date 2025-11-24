let marks = 85;  
let age = 17;    


let grade;

if (marks >= 90 && marks <= 100) {
  grade = "A";
} else if (marks >= 75) {
  grade = "B";
} else if (marks >= 50) {
  grade = "C";
} else if (marks >= 0) {
  grade = "F";
} else {
  grade = "Invalid Marks";
}

console.log("Grade:", grade);


let result = age >= 18 ? "Adult" : "Minor";
console.log("Age Status:", result);
