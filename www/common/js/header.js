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

    function goToPage(page) {
        window.location.href = page;
    }

    document.querySelector('#mobileNav li:nth-child(1)').addEventListener('click', function() {
        goToPage('../rank/rank.html');
    });
    document.querySelector('#mobileNav li:nth-child(2)').addEventListener('click', function() {
        goToPage('../community/community.html');
    });
    document.querySelector('#mobileNav li:nth-child(3)').addEventListener('click', function() {
        goToPage('../rival/rival.html');
    });
    document.querySelector('#mobileNav li:nth-child(4)').addEventListener('click', function() {
        goToPage('../record/record.html');
    });
    document.querySelector('#mobileNav li:nth-child(5)').addEventListener('click', function() {
        goToPage('../addfriend/addfriend.html');
    });
});