const typingText = document.getElementById("typing-text");
const textArray = [
    "Computer Science Student",
    "Future Web Developer",
    "Creative Problem Solver"
];

let textArrayIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < textArray[textArrayIndex].length) {
        typingText.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
        }
        setTimeout(typeEffect, 300);
    }
}

function toggleAbout() {
    const aboutText = document.getElementById("about-text");

    if (aboutText.style.display === "none") {
        aboutText.style.display = "block";
    } else {
        aboutText.style.display = "none";
    }
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");

    const themeButton = document.getElementById("theme-btn");

    if (document.body.classList.contains("light-mode")) {
        themeButton.innerHTML = "Dark Mode";
    } else {
        themeButton.innerHTML = "Light Mode";
    }
}

function filterProjects(category) {
    const projects = document.querySelectorAll(".project-card");
    const buttons = document.querySelectorAll(".filter-btn");

    projects.forEach(project => {
        if (category === "all" || project.dataset.category.includes(category)) {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    });

    buttons.forEach(button => {
        button.classList.remove("active-filter");
    });

    event.target.classList.add("active-filter");
}

function revealSections() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(section => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 100;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add("active");
        }
    });
}

document.getElementById("year").innerHTML = new Date().getFullYear();

window.addEventListener("scroll", revealSections);
window.addEventListener("load", () => {
    revealSections();
    typeEffect();
});