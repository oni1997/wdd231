document.addEventListener('DOMContentLoaded', () => {
    const spotlightContainer = document.querySelector('#spotlight-container');
    
    // Fetch the JSON data
    async function fetchMembers() {
        try {
            const response = await fetch('data/members2.json');
            if (response.ok) {
                const data = await response.json();
                displaySpotlights(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
            displaySpotlightError();
        }
    }
    
    // Display spotlights
    function displaySpotlights(data) {
        // Clear loading message
        spotlightContainer.innerHTML = '';
        
        // Filter for gold (level 3) or silver (level 2) members
        const eligibleMembers = data.filter(member => 
            member.membershipLevel >= 2
        );
        
        // If no eligible members
        if (eligibleMembers.length === 0) {
            displaySpotlightError();
            return;
        }
        
        // Randomly select 2-3 members (depending on available)
        const numberOfSpotlights = Math.min(Math.floor(Math.random() * 2) + 2, eligibleMembers.length);
        const shuffledMembers = shuffleArray(eligibleMembers);
        const selectedMembers = shuffledMembers.slice(0, numberOfSpotlights);
        
        // Create and append spotlight cards
        selectedMembers.forEach(member => {
            const spotlight = document.createElement('div');
            spotlight.classList.add('spotlight');
            
            // Determine membership level text and class
            let membershipLabel = '';
            let membershipClass = '';
            
            if (member.membershipLevel === 3) {
                membershipLabel = 'Gold';
                membershipClass = 'gold';
            } else if (member.membershipLevel === 2) {
                membershipLabel = 'Silver';
                membershipClass = 'silver';
            }
            
            spotlight.innerHTML = `
                <img src="${member.image}" alt="${member.name} Logo" class="spotlight-logo">
                <h3>${member.name}</h3>
                <p>${member.description}</p>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <a href="${member.website}" target="_blank" class="website-link">Visit Website</a>
                <p class="membership-level ${membershipClass}">${membershipLabel} Member</p>
            `;
            
            spotlightContainer.appendChild(spotlight);
        });
    }
    
    // Handle errors
    function displaySpotlightError() {
        spotlightContainer.innerHTML = '<p>Member spotlights unavailable</p>';
    }
    
    // Helper function to shuffle array (Fisher-Yates algorithm)
    function shuffleArray(array) {
        let currentIndex = array.length;
        let randomIndex;
        
        // While there remain elements to shuffle
        while (currentIndex != 0) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            
            // And swap it with the current element
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        
        return array;
    }
    
    // Load member data
    fetchMembers();
});