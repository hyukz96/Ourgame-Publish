//index.js

document.addEventListener("DOMContentLoaded",function(){
    const logiN = document.getElementById("logIn");

    function goToPage(page) {
        window.location.href = page;
    }

    logiN.addEventListener('click', function(){
        goToPage('pages/rank/rank.html');
    });
});