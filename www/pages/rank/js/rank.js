//rank.js

document.addEventListener("DOMContentLoaded", function() {
    const batSwitch = document.getElementById("batRank");
    const pitSwitch = document.getElementById("pitRank");
    const batRecord = document.getElementById("battinG");
    const pitRecord = document.getElementById("pitchinG");

    batSwitch.addEventListener('click', function() {
        if (batRecord.style.display === "block") {
            return;0
        }
        batRecord.style.display = "block";
        pitRecord.style.display = "none";
    });

    pitSwitch.addEventListener('click', function() {
        if (pitRecord.style.display === "block") {
            return;0
        }
        pitRecord.style.display = "block";
        batRecord.style.display = "none";
    });
});