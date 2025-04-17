// Enhanced JavaScript functionality
document.addEventListener("DOMContentLoaded", function () {
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        document.body.dataset.theme = 
            document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('theme', document.body.dataset.theme);
    });

    // Project filtering
    const projects = JSON.parse(localStorage.getItem('projects') || '[]');
    const techFilter = document.getElementById('tech-filter');
    techFilter?.addEventListener('change', (e) => {
        const filtered = projects.filter(p => 
            p.technologies.includes(e.target.value)
        );
        updateProjectDisplay(filtered);
    });

    // Form validation with error handling
    const contactForm = document.querySelector('.contact-form');
    contactForm?.addEventListener('submit', validateForm);
});

function validateForm(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const errors = [];

    if (!formData.get('email').includes('@')) {
        errors.push('Invalid email address');
    }

    if (errors.length === 0) {
        handleFormSubmission(formData);
    } else {
        showErrors(errors);
    }
}
