const hamburgerBtn = document.getElementById('hamburger-btn');
const primaryNav = document.getElementById('primary-nav');
const currentDateElement = document.getElementById('current-date');
const currentYearElement = document.getElementById('current-year');
const lastModifiedElement = document.getElementById('last-modified');

hamburgerBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
    hamburgerBtn.textContent = primaryNav.classList.contains('open') ? '✕' : '☰';
});

function setCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
    };
    currentDateElement.textContent = now.toLocaleDateString('en-US', options);
}

function setCopyrightYear() {
    const now = new Date();
    currentYearElement.textContent = now.getFullYear();
}

function setLastModified() {
    lastModifiedElement.textContent = document.lastModified;
}

document.addEventListener('DOMContentLoaded', () => {
    setCurrentDate();
    setCopyrightYear();
    setLastModified();
    
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 600 && primaryNav.classList.contains('open')) {
            primaryNav.classList.remove('open');
            hamburgerBtn.textContent = '☰';
        }
    });
});