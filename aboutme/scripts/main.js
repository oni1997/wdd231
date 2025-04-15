import { fetchProjects } from './modules/data.js';
import { createProjectCard, showModal } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // Select element
    const projectList = document.querySelector('.project-list');
    
    // Modify element
    projectList.innerHTML = '<h3>Loading projects...</h3>';
    
    // Event listener
    projectList.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-link')) {
            e.preventDefault();
            showModal('Loading project details...');
        }
    });
});
