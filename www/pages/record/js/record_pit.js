//record_pit.js

// 이닝 소수점 표현을 분리하는 함수
function parseInning(innings) {
    let fullInnings = Math.floor(innings); // 정수 부분: 전체 이닝
    let partialInnings = innings - fullInnings; // 소수 부분: 아웃

    // 소수 부분을 아웃으로 변환
    let outs = Math.round(partialInnings * 10); 

    return {
        fullInnings: fullInnings,
        outs: outs
    };
}

// 이닝과 아웃을 합쳐서 소수점 표현으로 반환하는 함수
function combineInning(fullInnings, outs) {
    // 아웃을 소수점 표현으로 변환
    let partialInnings = outs / 10;

    return fullInnings + partialInnings;
}

document.addEventListener("DOMContentLoaded", function() {
    function pitCalcStat(){
        // 이닝
        let inningInput = document.getElementById("inninG").valueAsNumber;
        let inningsObj = parseInning(inningInput);
        let inningsPitched = combineInning(inningsObj.fullInnings, inningsObj.outs);
        
        // 나머지 변수들의 값 가져오기
        let gameSp = document.getElementById("gameSp").valueAsNumber;
        let win = document.getElementById("win").valueAsNumber;
        let lose = document.getElementById("lose").valueAsNumber;
        let save = document.getElementById("save").valueAsNumber;
        let hold = document.getElementById("hold").valueAsNumber;
        let batterFaced = document.getElementById("batterFaced").valueAsNumber;
        let atbatP = document.getElementById("atbatP").valueAsNumber;
        let hitsP = document.getElementById("hitsP").valueAsNumber;
        let homerunP = document.getElementById("homerunP").valueAsNumber;
        let baseonballsP = document.getElementById("baseonballsP").valueAsNumber;
        let hitbypitchP = document.getElementById("hitbypitchP").valueAsNumber;
        let strikeoutP = document.getElementById("strikeoutP").valueAsNumber;
        let wildPitch = document.getElementById("wildPitch").valueAsNumber;
        let balk = document.getElementById("balk").valueAsNumber;
        let runAllowed = document.getElementById("runAllowed").valueAsNumber;
        let earnedRun = document.getElementById("earnedRun").valueAsNumber;

        //결과 계산
        let era = (earnedRun * 9) / inningsPitched;
        let winPct = win / (win + lose);
        let whip = (baseonballsP + hitsP) / inningsPitched;
        let bbsoP = baseonballsP / strikeoutP;
        let hitperG = (hitsP * 9) / inningsPitched;
        let hrperG = (homerunP * 9) / inningsPitched;
        let bbperG = (baseonballsP * 9) / inningsPitched;
        let soperG = (strikeoutP * 9) / inningsPitched;
        let fip = (13 * homerunP + 3 * baseonballsP - 2 * strikeoutP) / inningsPitched + 3.1;

        //결과 표시
        document.getElementById("erA").textContent = era.toFixed(2);
        document.getElementById("winPct").textContent = winPct.toFixed(3);
        document.getElementById("whiP").textContent = whip.toFixed(2);
        document.getElementById("bbsoP").textContent = bbsoP.toFixed(2);
        document.getElementById("fip").textContent = fip.toFixed(2);
        document.getElementById("hitperG").textContent = hitperG.toFixed(1);
        document.getElementById("hrperG").textContent = hrperG.toFixed(1);
        document.getElementById("bbperG").textContent = bbperG.toFixed(1);
        document.getElementById("soperG").textContent = soperG.toFixed(1);
    }

    document.getElementById("getRecordpitching").addEventListener("click", pitCalcStat);
});