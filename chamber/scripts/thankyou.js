// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Populate submitted information
document.addEventListener('DOMContentLoaded', () => {
    const submittedInfoDiv = document.getElementById('submitted-info');

    // Required fields to display
    const requiredFields = [
        'firstName', 
        'lastName', 
        'email', 
        'phone', 
        'orgName', 
        'membershipLevel', 
        'timestamp'
    ];

    // Create paragraph elements for each field
    const infoParagraphs = requiredFields.map(field => {
        const value = getUrlParameter(field);
        if (value) {
            const formattedField = field
                .replace(/([A-Z])/g, ' $1')
                .replace(/^./, str => str.toUpperCase());

            return `<p><strong>${formattedField}:</strong> ${value}</p>`;
        }
        return '';
    }).filter(Boolean);

    // Insert the paragraphs
    submittedInfoDiv.innerHTML = infoParagraphs.join('');
});

// Hamburger menu functionality
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const primaryNav = document.getElementById("primary-nav");

    if (hamburgerBtn && primaryNav) {
        hamburgerBtn.addEventListener("click", function () {
            primaryNav.classList.toggle("active");
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    // Display current date
    const currentDateElem = document.getElementById('current-date');
    if (currentDateElem) {
        const currentDate = new Date().toLocaleDateString();
        currentDateElem.textContent = currentDate;
    }

    // Display last modified date
    const lastModifiedElem = document.getElementById('last-modified');
    if (lastModifiedElem) {
        const lastModified = new Date(document.lastModified).toLocaleDateString();
        lastModifiedElem.textContent = lastModified;
    }
});