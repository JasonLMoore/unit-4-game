$(document).ready(function() {});

var totalScore = 0;
var totalWins = 0;
var totalLosses = 0;
var crystalNumArr = [];
var randomNumber = 0;


var reset = function () {
    totalScore = 0;
    crystalNumArr = [];
    randomNumber = 0;
    $("#total-score").text(totalScore);
    randomizeNumber()
    setCrystalNumber()
    targetNumber = makeTarget();
    console.log (targetNumber)
    $("#random-number").text(targetNumber);
};
    
    




//Makes target number
var makeTarget = function() {
    var targetMin = 19;
    var targetMax = 120;
    var targetArray = [];
    for (var i = targetMin; i < targetMax+1; i++) {
        targetArray.push(i);
    };
    console.log(targetArray);
    randomNumber = targetArray[Math.floor(Math.random() * targetArray.length)];
    //console.log(randomNumber);
    return randomNumber;
};

//creates array of 4 random crystal numbers
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
    console.log (crystalNumArr);
    return crystalNumArr;
};

//assigns crystals a random number
var setCrystalNumber = function () {
    $("#crystal-1").attr("data-crystalvalue", crystalNumArr[0]);
    $("#crystal-2").attr("data-crystalvalue", crystalNumArr[1]);
    $("#crystal-3").attr("data-crystalvalue", crystalNumArr[2]);
    $("#crystal-4").attr("data-crystalvalue", crystalNumArr[3]);
};

randomizeNumber();
setCrystalNumber();



var targetNumber = makeTarget();
console.log(targetNumber);
$("#random-number").text(targetNumber);


$(".crystalImg").on("click", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    totalScore += crystalValue;
    $("#total-score").text(totalScore);
    console.log(totalScore);
    
    
    if (totalScore === targetNumber) {
        totalWins++;
        $("#wins").text(totalWins);
        reset();
        
    } else if (totalScore >= targetNumber) {
        totalLosses++;
        $("#losses").text(totalLosses);
        reset();
    };
    
    if (totalWins === 5) {
        alert("You Win!");
        totalWins = 0;
        $("#wins").text(totalWins);
        totalLosses = 0;
        $("#losses").text(totalLosses);
    } else if (totalLosses === 5) {
        alert("Sorry. You Lose!");
        totalWins = 0;
        $("#wins").text(totalWins);
        totalLosses = 0;
        $("#losses").text(totalLosses);
    };
    
    
});











