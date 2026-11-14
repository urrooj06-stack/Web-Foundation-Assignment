
// Assignment 22: Validation Utility using Guard Clauses (Fail-fast architecture)
class Validator {
    static isValidStudent(student) {
        // Guard 1: Null/Undefined check
        if (!student) throw new Error("Student object is missing");
        
        // Guard 2: Type check
        if (typeof student !== 'object') throw new Error("Invalid data format");
        
        // Guard 3: Required string fields
        if (!student.name || student.name.trim() === '') return false;
        if (!student.email || !student.email.includes('@')) return false;
        
        // Guard 4: Age constraints
        if (student.age == null || student.age < 17) return false;
        
        // If all guards pass, return true
        return true; 
    }
}
const testUser = { name: 'Ansh', email: 'ansh@invertis.edu', age: 20 };
console.log("Validation Result:", Validator.isValidStudent(testUser));
