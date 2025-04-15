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
