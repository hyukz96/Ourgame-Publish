//community.js

document.addEventListener("DOMContentLoaded", function(){
    const postinG = document.getElementById("writE");

    function goToPage(page) {
        window.location.href = page;
    }

    postinG.addEventListener('click',function() {
        goToPage('community_write/community_write.html');
    });
});