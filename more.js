document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".projects-card");

    const projectDescriptions = {
// 
    };

    projects.forEach(project => {
        project.addEventListener("mouseenter", function (event) {
        let tooltip = document.createElement("div");
        tooltip.className = "tooltip-box";
        tooltip.innerText = projectDescriptions[project.innerText] || "No description available";
        document.body.appendChild(tooltip);

        let rect = project.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;

        project.addEventListener("mouseleave", function () {
            tooltip.remove();
        });
    });
});
});