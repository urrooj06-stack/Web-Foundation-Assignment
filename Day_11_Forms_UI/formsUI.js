// Assignment 42: Contact form with submission summary
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const summary = document.getElementById('summary');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page reload
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        
        // Display summary dynamically
        summary.style.display = 'block';
        summary.innerHTML = `<strong>Submission Successful!</strong><br>Name: ${name}<br>Email: ${email}`;
        
        form.reset();
    });
});
