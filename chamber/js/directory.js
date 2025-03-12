async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) {
            throw new Error('Failed to fetch member data');
        }
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching members:', error);
        document.getElementById('members').innerHTML = '<p>Error loading member data. Please try again later.</p>';
    }
}

// Function to display members
function displayMembers(members) {
    const membersDiv = document.getElementById('members');
    membersDiv.innerHTML = '';
    
    members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
        
        // Add class based on membership level
        if (member.membershipLevel === 3) {
            memberCard.classList.add('gold-member');
        } else if (member.membershipLevel === 2) {
            memberCard.classList.add('silver-member');
        }
        
        // Create member info div
        const memberInfo = document.createElement('div');
        memberInfo.classList.add('member-info');
        
        // Add membership level badge/text
        let membershipLabel = '';
        if (member.membershipLevel === 3) {
            membershipLabel = '<span class="membership-badge gold">Gold Member</span>';
        } else if (member.membershipLevel === 2) {
            membershipLabel = '<span class="membership-badge silver">Silver Member</span>';
        }
        
        // Build the HTML content
        memberCard.innerHTML = `
            <img src="${member.image}" alt="${member.name}" loading="lazy">
        `;
        
        memberInfo.innerHTML = `
            <h3>${member.name} ${membershipLabel}</h3>
            <p>${member.description}</p>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Website</a></p>
            <p>Founded: ${member.founded}</p>
        `;
        
        memberCard.appendChild(memberInfo);
        membersDiv.appendChild(memberCard);
    });
}

// Toggle between grid and list views
function setupViewToggle() {
    const gridButton = document.getElementById('grid-view');
    const listButton = document.getElementById('list-view');
    const membersDiv = document.getElementById('members');
    
    gridButton.addEventListener('click', () => {
        membersDiv.classList.remove('list');
        membersDiv.classList.add('grid');
        gridButton.classList.add('active');
        listButton.classList.remove('active');
    });
    
    listButton.addEventListener('click', () => {
        membersDiv.classList.remove('grid');
        membersDiv.classList.add('list');
        listButton.classList.add('active');
        gridButton.classList.remove('active');
    });
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    getMembers();
    setupViewToggle();
});