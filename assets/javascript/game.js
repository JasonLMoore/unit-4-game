
var crystalValue = 0;
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
$('#random-number').text(makeTarget());



    
    
