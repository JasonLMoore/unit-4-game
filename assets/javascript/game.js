var totalScore = 0;
var totalWins = 0;
var totalLosses = 0;



var makeTarget = function() {
    var targetMin = 19;
    var targetMax = 120;
    var targetArray = [];
    for (var i = targetMin; i < targetMax+1; i++) {
        targetArray.push(i);
    };
    console.log(targetArray);
    var randomNumber = targetArray[Math.floor(Math.random() * targetArray.length)];
    console.log(randomNumber);
    return randomNumber;
};

var setCrystalNumber = function () {
    var crystalValue;
    var crystalMin = 1;
    var crystalMax = 12;
    var crystalArr = [];
    for (var q = crystalMin; q < crystalMax+1; q++) {
        crystalArr.push(q);
    };
    //console.log (crystalArr);
    var randomCrystalNum = crystalArr[Math.floor(Math.random() * crystalArr.length)];
    //console.log(randomCrystalNum);
    crystalValue = randomCrystalNum;
    //console.log (crystalValue);
    return crystalValue;
};


$(document).ready(function() {
    $('#random-number').text(makeTarget());
    $('#crystal-1').click(function() {
        console.log(setCrystalNumber());
    });
});



    
    
