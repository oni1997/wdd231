const courses = [
    { name: "WDD 130 - Web Fundamentals", category: "WDD", credits: 2, completed: true },
    { name: "WDD 231 - Web Frontend Dev", category: "WDD", credits: 2, completed: false },
    { name: "CSE 110 - Programming Basics", category: "CSE", credits: 2, completed: true },
    { name: "CSE 111 - Programming with Functions", category: "CSE", credits: 2, completed: true },
    { name: "CSE 210 - Programming with Classes", category: "CSE", credits: 2, completed: false },
    { name: "WDD 131 - Dynamic Web Fundamentals", category: "WDD", credits: 2, completed: false },
];

function displayCourses(filter) {
    const container = document.getElementById("courseContainer");
    if (!container) return;

    container.innerHTML = "";
    let filteredCourses = filter === "all" ? courses : courses.filter(course => course.category === filter);
    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.textContent = `${course.name} - ${course.credits} credits`;
        courseDiv.style.backgroundColor = course.completed ? "#d4edda" : "#f8d7da";
        courseDiv.style.padding = "10px";
        courseDiv.style.margin = "5px";
        courseDiv.style.borderRadius = "5px";
        courseDiv.style.transition = "all 0.3s ease-in-out";
        container.appendChild(courseDiv);
        totalCredits += course.credits;
    });

    document.getElementById("totalCredits").textContent = totalCredits;
}

function filterCourses(category) {
    document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("bg-yellow-500"));
    const btn = document.getElementById(`btn${category}`);
    if (btn) {
        btn.classList.add("bg-yellow-500");
    }
    displayCourses(category);
}

document.addEventListener("DOMContentLoaded", function() {
    displayCourses("all");

    const copyrightElement = document.getElementById("copyright");
    const lastModifiedElement = document.getElementById("lastModified");

    if (copyrightElement) {
        const year = new Date().getFullYear();
        copyrightElement.innerHTML = `&copy; ${year} Onesmus Maenzanise`;
    }

    if (lastModifiedElement) {
        lastModifiedElement.innerHTML = `Last Modified: ${document.lastModified}`;
    }
});