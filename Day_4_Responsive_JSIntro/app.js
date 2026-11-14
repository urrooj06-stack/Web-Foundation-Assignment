
// Assignment 15: Student Profile Variables
const studentProfile = {
    name: "Ansh Mishra",
    course: "BCA AI",
    year: 2,
    university: "Invertis University",
    isEnrolled: true,
    grades: [85, 90, 78, 92]
};
console.log("Student Profile Data:", studentProfile);

// Assignment 16: Grade Calculator Conditional Statements
function calculateGrade(score) {
    if (typeof score !== 'number' || score < 0 || score > 100) return "Invalid Score";
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}
console.log("Grade for Score 85:", calculateGrade(85));
console.log("Grade for Score 92:", calculateGrade(92));
