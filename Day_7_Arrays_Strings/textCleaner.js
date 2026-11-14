// Assignment 27: Text-cleaning utility for form inputs
const TextCleaner = {
    sanitize: (input) => {
        if (typeof input !== 'string') return '';
        return input
            .trim() // Remove leading/trailing spaces
            .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
            .replace(/[<>\/]/g, ''); // Basic XSS prevention (strip <, >, /)
    }
};

const dirtyInput = "   <script>alert('hack')</script>   Hello    World  ";
console.log("Cleaned Input (Safe from Basic XSS):", TextCleaner.sanitize(dirtyInput));
