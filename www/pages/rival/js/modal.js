//modal.js

document.addEventListener("DOMContentLoaded", function() {
    const rivalAdd = document.getElementById("addRival");
    const modalAll = document.getElementById("modal");
    const closeModal = document.getElementById("modalClose");

    rivalAdd.addEventListener('click', function() {
        modalAll.style.display = "block";
    });
    closeModal.addEventListener('click', function() {
        modalAll.style.display = "none";
    });
});