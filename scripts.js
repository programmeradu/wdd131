// JavaScript for WDD 131 Home Page

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic copyright year
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Dynamic last modified date
    const lastModifiedSpan = document.getElementById("lastModified");
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});
