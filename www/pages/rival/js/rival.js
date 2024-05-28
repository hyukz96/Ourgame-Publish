//rival.js

document.addEventListener("DOMContentLoaded", function() {
    const batSwitch = document.getElementById("batRecord");
    const pitSwitch = document.getElementById("pitRecord");
    const batRival = document.getElementById("battingWrap");
    const pitRival = document.getElementById("pitchingWrap");
    
    const showMybat = document.getElementsByClassName('showlater')[0];
    const showOtherbat = document.getElementsByClassName('showlater')[1];
    const showMypit = document.getElementsByClassName('showlater')[2];
    const showOtherpit = document.getElementsByClassName('showlater')[3];

    const batShowall = document.getElementById("showAllbat");
    const pitShowall = document.getElementById("showAllpit");
    

    batSwitch.addEventListener('click', function() {
        if (batRival.style.display === "block") {
            return;0
        }
        batRival.style.display = "block";
        pitRival.style.display = "none";
        showMypit.style.display = "none";
        showOtherpit.style.display = "none";
        batShowall.style.display = "block";
        pitShowall.style.display = "block";
    });

    pitSwitch.addEventListener('click', function() {
        if (pitRival.style.display === "block") {
            return;0
        }
        pitRival.style.display = "block";
        batRival.style.display = "none";
        showMybat.style.display = "none";
        showOtherbat.style.display = "none";
        batShowall.style.display = "block";
        pitShowall.style.display = "block";
    });

    batShowall.addEventListener('click', function() {
        showMybat.style.display = "block";
        showOtherbat.style.display = "block";
        batShowall.style.display = "none";
    });

    pitShowall.addEventListener('click', function() {
        showMypit.style.display = "block";
        showOtherpit.style.display = "block";
        pitShowall.style.display = "none";
    });

});