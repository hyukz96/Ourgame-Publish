//record.js

document.addEventListener("DOMContentLoaded", function() {
    const batSwitch = document.getElementById("batRecord");
    const pitSwitch = document.getElementById("pitRecord");
    const recordBat = document.getElementById("battingR");
    const recordPit = document.getElementById("pitchingR");

    const reseT = document.getElementById("reSet");

    batSwitch.addEventListener('click', function() {
        if (recordBat.style.display === "block") {
            return;0
        }
        recordBat.style.display = "block";
        recordPit.style.display = "none";
    });

    pitSwitch.addEventListener('click', function() {
        if (recordPit.style.display === "block") {
            return;0
        }
        recordPit.style.display = "block";
        recordBat.style.display = "none";
    });

    function calculationStat(){
        //'23 성대 일요리그 리그스탯
        const leagueWoba = 0.393;
        const wobaScale = 1.25;
        //경기
        let gameS = document.getElementById("gameS").valueAsNumber;
        //타석
        let plateAppear = document.getElementById("plateAppear").valueAsNumber;
        //타수
        let atBat = document.getElementById("atBat").valueAsNumber;
        //득점
        let runS = document.getElementById("runS").valueAsNumber;
        //안타
        let hitS = document.getElementById("hitS").valueAsNumber;
        //2루타
        let twoBase = document.getElementById("twoBase").valueAsNumber;
        //3루타
        let threeBase = document.getElementById("threeBase").valueAsNumber;
        //홈런
        let homeRun = document.getElementById("homeRun").valueAsNumber;
        //루타
        let totalBase = document.getElementById("totalBase").valueAsNumber;
        //타점
        let runsBattedin = document.getElementById("runsBattedin").valueAsNumber;
        //도루
        let stolenBase = document.getElementById("stolenBase").valueAsNumber;
        //도루실패
        let caughtSteal = document.getElementById("caughtSteal").valueAsNumber;
        //볼넷
        let baseOnballs = document.getElementById("baseOnballs").valueAsNumber;
        //사구
        let hitbyPitch = document.getElementById("hitbyPitch").valueAsNumber;
        //고의4구
        let intenBb = document.getElementById("intenBb").valueAsNumber;
        //삼진
        let strikeOut = document.getElementById("strikeOut").valueAsNumber;
        //병살타
        let doublePlay = document.getElementById("doublePlay").valueAsNumber;
        //희생타(희생번트)
        let sacHit = document.getElementById("sacHit").valueAsNumber;
        //희생플라이
        let sacFly = document.getElementById("sacFly").valueAsNumber;
        //단타 갯수 (계산용)
        let singleHits = hitS - (twoBase + threeBase + homeRun);
    
        //결과 계산
        let avG = hitS / atBat;
        let obP = (hitS + baseOnballs + hitbyPitch) / (atBat + baseOnballs + hitbyPitch + sacFly);
        let slG = totalBase / atBat;
        let opS = obP + slG
        let kPercent = (strikeOut / plateAppear) * 100;
        let bbPercent = (baseOnballs / plateAppear) * 100;
        let bbSo = baseOnballs / strikeOut;
        let baBip = (hitS - homeRun) / (atBat - strikeOut - homeRun + sacFly);
        let isoP = slG - avG;
        let isoD = obP - avG;
        let wOba = ((0.69 * baseOnballs) + (0.72 * hitbyPitch) + (0.89 * singleHits) + (1.27 * twoBase) + (1.62 * threeBase) + (2.10 * homeRun)) / (atBat + (baseOnballs - intenBb) + hitbyPitch + sacFly);
        
        //rc, rc27 계산에 필요한 변수 작성
        let rcA = hitS + baseOnballs - caughtSteal + hitbyPitch - doublePlay;
        let rcB = (1.125 * singleHits) + (1.69 * twoBase) + (3.02 * threeBase) + (3.73 * homeRun) + (0.29 * (baseOnballs - intenBb + hitbyPitch)) + (0.492 * (sacHit + sacFly + stolenBase)) - (0.4 * strikeOut);
        let rcC = atBat + baseOnballs + hitbyPitch + sacHit + sacFly;
        let rcD = ((2.4 * rcC) + rcA) * ((3 * rcC) + rcB);
        //RC식
        let rC = (rcD / (9 * rcC)) - (0.9 * rcC);
        
        let rcperGame = rC / (atBat - hitS + caughtSteal + sacHit + sacFly + doublePlay) * 27;
    
        
        //결과 표시
        document.getElementById("avG").textContent = avG.toFixed(3);
        document.getElementById("obP").textContent = obP.toFixed(3);
        document.getElementById("slG").textContent = slG.toFixed(3);
        document.getElementById("opS").textContent = opS.toFixed(3);
        document.getElementById("kPercent").textContent = kPercent.toFixed(1);
        document.getElementById("bbPercent").textContent = bbPercent.toFixed(1);
        document.getElementById("bbSo").textContent = bbSo.toFixed(2);
        document.getElementById("baBip").textContent = baBip.toFixed(3);
        document.getElementById("isoP").textContent = isoP.toFixed(3);
        document.getElementById("isoD").textContent = isoD.toFixed(3);
        document.getElementById("wOba").textContent = wOba.toFixed(3);
        document.getElementById("rcperGame").textContent = rcperGame.toFixed(2);
        document.getElementById("wRaa").textContent = wRaa.toFixed(2);
        document.getElementById("rPpa").textContent = rPpa.toFixed(2);
    }
    
    document.getElementById("getRecordbatting").addEventListener("click", calculationStat);
    
    function resetInputs() {
        document.getElementById("gameS").value = "";
        document.getElementById("plateAppear").value = "";
        document.getElementById("atBat").value = "";
        document.getElementById("runS").value = "";
        document.getElementById("hitS").value = "";
        document.getElementById("twoBase").value = "";
        document.getElementById("threeBase").value = "";
        document.getElementById("homeRun").value = "";
        document.getElementById("totalBase").value = "";
        document.getElementById("runsBattedin").value = "";
        document.getElementById("stolenBase").value = "";
        document.getElementById("caughtSteal").value = "";
        document.getElementById("baseOnballs").value = "";
        document.getElementById("hitbyPitch").value = "";
        document.getElementById("intenBb").value = "";
        document.getElementById("strikeOut").value = "";
        document.getElementById("doublePlay").value = "";
        document.getElementById("sacHit").value = "";
        document.getElementById("sacFly").value = "";
    
        document.getElementById("avG").textContent = "";
        document.getElementById("obP").textContent = "";
        document.getElementById("slG").textContent = "";
        document.getElementById("opS").textContent = "";
        document.getElementById("kPercent").textContent = "";
        document.getElementById("bbPercent").textContent = "";
        document.getElementById("bbSo").textContent = "";
        document.getElementById("baBip").textContent = "";
        document.getElementById("isoP").textContent = "";
        document.getElementById("isoD").textContent = "";
        document.getElementById("wOba").textContent = "";
        document.getElementById("rcperGame").textContent = "";
    }
    
    
    document.getElementById("reSet").addEventListener("click", resetInputs);
    
});


