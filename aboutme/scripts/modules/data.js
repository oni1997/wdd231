export async function fetchProjects() {
    try {
        // Using relative path from the current location
        const response = await fetch('../../data/projects.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const projects = await response.json();
        return processProjects(projects);
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error; // Propagate error to main.js
    }
}

export function processProjects(projects) {
    return projects
        .filter(p => p.technologies.length > 0)
        .map(p => ({
            ...p,
            techCount: p.technologies.length,
            summary: `${p.title} - ${p.description.substring(0, 100)}...`
        }))
        .sort((a, b) => b.techCount - a.techCount);
}
