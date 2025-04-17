import { fetchProjects } from './modules/data.js';
import { createProjectCard, showModal } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    const projectList = document.querySelector('.project-list');
    if (!projectList) {
        console.error('Project list element not found');
        return;
    }
    
    projectList.innerHTML = '<h3>Loading projects...</h3>';
    
    try {
        console.log('Fetching projects...');
        const projects = await fetchProjects();
        console.log('Projects received:', projects);
        
        if (!projects || projects.length === 0) {
            projectList.innerHTML = '<h3>No projects found</h3>';
            return;
        }

        const projectCards = projects.map(project => createProjectCard(project)).join('');
        projectList.innerHTML = projectCards;
        
        projectList.addEventListener('click', (e) => {
            if (e.target.classList.contains('project-link')) {
                e.preventDefault();
                const projectTitle = e.target.closest('.project').querySelector('h3').textContent;
                const project = projects.find(p => p.title === projectTitle);
                if (project) {
                    showModal(project.extendedDescription || project.description);
                }
            }
        });
    } catch (error) {
        console.error('Error in main.js:', error);
        projectList.innerHTML = `<h3>Error loading projects: ${error.message}</h3>`;
    }
});
