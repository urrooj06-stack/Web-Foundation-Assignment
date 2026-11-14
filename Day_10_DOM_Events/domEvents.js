// Assignment 37 & 40: Reusable Card Renderer & Unsafe HTML Prevention
// IIT-Level Concept: Never use innerHTML with user data to prevent XSS.

const profileData = { name: "Ansh Mishra", role: "AI Developer", bio: "Building intelligent systems." };

function renderCardSafe(containerId, data) {
    const container = document.getElementById(containerId);
    
    // Create elements dynamically (Safe from XSS)
    const card = document.createElement('div');
    card.className = 'card profile-card';
    
    const nameEl = document.createElement('h3');
    nameEl.textContent = data.name; // textContent is secure
    
    const roleEl = document.createElement('p');
    roleEl.textContent = data.role;
    
    const bioEl = document.createElement('small');
    bioEl.textContent = data.bio;
    
    card.append(nameEl, roleEl, bioEl);
    container.appendChild(card);
}

document.addEventListener('DOMContentLoaded', () => {
    renderCardSafe('card-container', profileData);
    
    // Assignment 38: Accessible state classes
    const btn = document.getElementById('toggle-state-btn');
    btn.addEventListener('click', () => {
        const card = document.querySelector('.profile-card');
        if(card) {
            card.classList.toggle('active-state');
            // Accessibility update
            const isActive = card.classList.contains('active-state');
            card.setAttribute('aria-expanded', isActive);
        }
    });
});
