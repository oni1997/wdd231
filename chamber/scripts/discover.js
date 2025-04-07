document.addEventListener('DOMContentLoaded', () => {
    const visitorMessage = document.getElementById('visitor-message');
    const today = Date.now();
    
    let lastVisit = localStorage.getItem('lastVisit');
    
    if (!lastVisit) {
        visitorMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysBetween = Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24));
        
        if (daysBetween < 1) {
            visitorMessage.textContent = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            visitorMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitorMessage.textContent = `You last visited ${daysBetween} days ago.`;
        }
    }
    
    localStorage.setItem('lastVisit', today);
    
    fetch('data/attractions.json')
        .then(response => response.json())
        .then(data => {
            displayAttractions(data.attractions);
        })
        .catch(error => {
            console.error('Error loading attractions data:', error);
        });
});

function displayAttractions(attractions) {
    const grid = document.getElementById('discover-grid');
    
    attractions.forEach(attraction => {
        const card = document.createElement('div');
        card.classList.add('attraction-card');
        
        card.innerHTML = `
            <h2>${attraction.name}</h2>
            <figure>
                <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
            </figure>
            <address>${attraction.address}</address>
            <p>${attraction.description}</p>
            <button>Learn More</button>
        `;
        
        grid.appendChild(card);
    });
}