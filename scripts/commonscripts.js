document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".main-navbar");
    const navLinks = document.querySelectorAll(".main-navbar ul li a");

    // Toggle the navbar when the menu icon is clicked
    menuButton.addEventListener("click", function () {
        navbar.classList.toggle("active");
        // menuButton.style.display = navbar.classList.contains("active") ? "none" : "block";
    });

    // Hide the navbar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navbar.classList.remove("active");
            menuButton.style.display = "block";
        });
    });
});
