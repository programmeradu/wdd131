// JavaScript for Temple Album responsive navigation and footer dates

document.addEventListener("DOMContentLoaded", () => {
    // 1. Hamburger menu toggle
    const menuButton = document.querySelector("#menu");
    const navBar = document.querySelector("#nav-bar");

    if (menuButton && navBar) {
        menuButton.addEventListener("click", () => {
            navBar.classList.toggle("open");
            menuButton.textContent = navBar.classList.contains("open") ? "\u2716" : "\u2630";
        });
    }

    // 2. Dynamic footer copyright year
    const currentYear = document.querySelector("#currentyear");
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // 3. Dynamic document last modified date
    const lastModified = document.querySelector("#lastModified");
    if (lastModified) {
        lastModified.textContent = document.lastModified;
    }
});
