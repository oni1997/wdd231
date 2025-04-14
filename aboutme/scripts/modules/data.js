export async function fetchProjects() {
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}