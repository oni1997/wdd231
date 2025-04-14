import { fetchProjects } from './modules/data.js';
import { createProjectCard, showModal } from './modules/ui.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Local Storage for theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.setAttribute('data-theme', savedTheme);

    // Theme toggler
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.setAttribute('aria-label', 'Toggle dark mode');
        themeToggle.addEventListener('click', () => {
            const newTheme = document.body.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.setAttribute('aria-label', `Toggle ${newTheme === 'light' ? 'dark' : 'light'} mode`);
        });
    }

    // Projects loading
    const projectsContainer = document.querySelector('.project-list');
    if (projectsContainer) {
        try {
            const projects = await fetchProjects();
            if (!projects || projects.length === 0) {
                projectsContainer.innerHTML = '<p>No projects available at the moment.</p>';
                return;
            }
            
            projectsContainer.innerHTML = projects
                .map(project => createProjectCard(project))
                .join('');

            // Add click handlers for project details
            document.querySelectorAll('.project').forEach((project, index) => {
                project.addEventListener('click', () => {
                    const projectData = projects[index];
                    showModal(`
                        <h2>${projectData.title}</h2>
                        <div class="project-details-extended">
                            ${projectData.extendedDescription || projectData.description}
                        </div>
                    `);
                });
            });
        } catch (error) {
            console.error('Error loading projects:', error);
            projectsContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
        }
    }
});
