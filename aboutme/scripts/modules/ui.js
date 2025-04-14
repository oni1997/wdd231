export function createProjectCard(project) {
    return `
        <div class="project card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-details">
                <h4>Key Features:</h4>
                <ul>
                    ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                </ul>
                <h4>Technologies:</h4>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <h4>Purpose:</h4>
                <p>${project.purpose}</p>
            </div>
            ${project.link ? `<a href="${project.link}" class="project-link" target="_blank">View Project</a>` : ''}
        </div>
    `;
}

export function showModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            ${content}
        </div>
    `;
    document.body.appendChild(modal);
    
    modal.querySelector('.close').onclick = () => modal.remove();
}

export async function fetchSkills() {
    try {
        const response = await fetch('data/skills.json');
        const skills = await response.json();
        
        // Array method usage
        const filteredSkills = skills.filter(skill => skill.proficiency >= 8);
        
        // Store in localStorage
        localStorage.setItem('cachedSkills', JSON.stringify(filteredSkills));
        
        return filteredSkills;
    } catch (error) {
        console.error('Error fetching skills:', error);
        return [];
    }
}
