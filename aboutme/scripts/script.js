document.addEventListener("DOMContentLoaded", function () {
    // Update Current Year
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll("#currentYear");
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });

    // Navigation Active State
    const currentLocation = location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentLocation) {
            link.classList.add('active');
        }
    });
});