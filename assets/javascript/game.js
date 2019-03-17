var totalScore = 0;
var totalWins = 0;
var totalLosses = 0;
var crystalNumArr = [];

var reset = function () {
    makeTarget();
    randomizeNumber();
    setCrystalNumber();
    totalScore = 0
}




var makeTarget = function() {
    var targetMin = 19;
    var targetMax = 120;
    var targetArray = [];
    for (var i = targetMin; i < targetMax+1; i++) {
        targetArray.push(i);
    };
    //console.log(targetArray);
    var randomNumber = targetArray[Math.floor(Math.random() * targetArray.length)];
    console.log(randomNumber);
    return randomNumber;
};


var randomizeNumber = function () {
    var crystalMin = 1;
    var crystalMax = 12;
    var crystalArr = [];
    for (var q = crystalMin; q < crystalMax+1; q++) {
        crystalArr.push(q);
    };
    //console.log (crystalArr);
    //console.log(randomCrystalNum);
    for (k = 0; k < 4; k++) {
        var randomCrystalNum = crystalArr[Math.floor(Math.random() * crystalArr.length)];
        crystalNumArr.push(randomCrystalNum)
    };
    //console.log (crystalNumArr);
    return crystalNumArr;
};

var setCrystalNumber = function () {
    $("#crystal-1").attr("data-crystalvalue", crystalNumArr[0]);
    $("#crystal-2").attr("data-crystalvalue", crystalNumArr[1]);
    $("#crystal-3").attr("data-crystalvalue", crystalNumArr[2]);
    $("#crystal-4").attr("data-crystalvalue", crystalNumArr[3]);
};

var targetNumber = makeTarget();
$("#random-number").text(targetNumber);

$(".crystalImg").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;
    
    if (totalScore === targetNumber) {
        totalWins++;
        reset();
        
    } else if (totalScore >= targetNumber) {
        totalLosses++;
        reset();
    };
    $("#total-score").text(totalScore);
    $("#wins").text(totalWins);
    $("#losses").text(totalLosses);
});

if (totalWins === 10) {
    alert("You Win!");
} else if (totalLosses === 10) {
    alert("Sorry. You Lose!");
}





$(document).ready(function() {});



    
    
