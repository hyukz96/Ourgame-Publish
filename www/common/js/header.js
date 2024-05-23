//header.js

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menuSlide");
    const navMove = document.getElementById("mobileNav");

    menuToggle.addEventListener('click', function() {
        if (!navMove.style.top || navMove.style.top === "-500%") {
            navMove.style.top = "100%";
        } else {
            navMove.style.top = "-500%";
        }
    });

    
});