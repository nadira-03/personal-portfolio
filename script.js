const projectToggles = document.querySelectorAll(".project-toggle");

projectToggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        const details = toggle.nextElementSibling;
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        // Close all projects
        projectToggles.forEach(item => {
            item.setAttribute("aria-expanded", "false");
            item.nextElementSibling.hidden = true;
            item.querySelector(".project-icon").textContent = "+";
        });
        // Open the selected project
        if (!isExpanded) {
            toggle.setAttribute("aria-expanded", "true");
            details.hidden = false;
            toggle.querySelector(".project-icon").textContent = "−";
        }
    });
});
