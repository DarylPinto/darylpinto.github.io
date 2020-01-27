var pastRolls = [];
var previousLogsAmount = 0;
var currentlyRolling = false;

var displayOnPage = function(content){
    var rollingHeader = content[0];
    var individualRolls = content.slice(1, (content.length - 2));
    var totalHeader = content[content.length - 2]
    var diceResult = content[content.length - 1];

    var hideResults = function(){
        document.getElementById("rollingHeader").style.opacity = "0"; //Fade content out
        document.getElementById("individualRolls").style.opacity = "0";
        document.getElementById("totalHeader").style.opacity = "0";
        document.getElementById("diceResult").style.opacity = "0";
    }

    var changeResults = function (){
        document.getElementById("rollingHeader").innerHTML = "Rolled " + rollingHeader; //Change content
        document.getElementById("individualRolls").innerHTML = individualRolls;
        document.getElementById("totalHeader").innerHTML = totalHeader;
        document.getElementById("diceResult").innerHTML = diceResult;
    }

    var showResults = function(){
        document.getElementById("rollingHeader").style.opacity = "1"; //Fade content in
        document.getElementById("individualRolls").style.opacity = "1";
        document.getElementById("totalHeader").style.opacity = "1";
        document.getElementById("diceResult").style.opacity = "1";
    }

    var finishRolling = function(){
        currentlyRolling = false;
    }

    currentlyRolling = true;
    hideResults();
    setTimeout(changeResults, 250);
    setTimeout(showResults, 500);
    setTimeout(finishRolling, 750);
}

var loadDicePreset = function(dicePreset, facesPreset, modifierPreset){
    //document.getElementById("amount").value = dicePreset;
    document.getElementById("faces").value = facesPreset;
    //document.getElementById("modifier").value = modifierPreset;
}

var archiveRoll = function(){

    var archiveTag = "previous" + previousLogsAmount; //custom id for each roll log
    var lastRoll = pastRolls[1];

    if (previousLogsAmount > 0){
        var newRollLog = document.createElement("div"); //create new div to hold last roll
        newRollLog.setAttribute("id", archiveTag);
        document.getElementById("rollArchive").appendChild(newRollLog);

        var lastRollHeader = '<span class="logRollHeader">' + lastRoll[0] + '</span>';
        var lastRollIndividualRolls = '<span class="logRollIndividualRolls">' + lastRoll.slice(1, lastRoll.length - 2) + '</span>';
        var lastRollResult = '<span class="logRollResult">' + lastRoll[lastRoll.length - 1] + '</span>';
        var storeLastRoll = document.getElementById(archiveTag).innerHTML = lastRollHeader + lastRollIndividualRolls + lastRollResult;
        storeLastRoll //Appends previous roll to end of rollArchive div
        document.getElementById("rollArchive").insertBefore(document.getElementById("rollArchive").lastChild, document.getElementById("rollArchive").childNodes[0]) //Relocates lastRoll to the top of rollArchive

        document.getElementById("showArchive").style.visibility = "visible";
    }

    previousLogsAmount = previousLogsAmount + 1; //increment amount of rolls
}

var  openOverlay = function(){
  var rollArchive = document.getElementById("rollArchiveWindow");
  var blackOut = document.getElementById("blackOut");

  blackOut.style.display = "block";
  rollArchiveWindow.style.display = "block";
}

var closeOverlay = function(){
    var rollArchive = document.getElementById("rollArchiveWindow");
    var blackOut = document.getElementById("blackOut");

    blackOut.style.display = "none";
    rollArchiveWindow.style.display = "none";
}

var rollDice = function(){
    if (currentlyRolling === false){
        document.getElementById('resultContainer').style.height = "auto";
        document.getElementById('resultContainer').style.marginTop = "50px";
        document.getElementById('resultError').style.display = "none";

        currentRoll = []

        var amount = parseInt(document.getElementById('amount').value);
        var faces = parseInt(document.getElementById('faces').value);
        var modifier = parseInt(document.getElementById('modifier').value);

        if (amount <= 250){ //Makes sure browser doesn't crash trying to iterate over too many dice
            var total = 0; //Total starts at 0
            if (modifier === 0){
                currentRoll.push(amount + "d" + faces);
            }else if (modifier < 0){
                currentRoll.push(amount + "d" + faces + modifier);
            }else{
                currentRoll.push(amount + "d" + faces + "+" + modifier);
            }
            for (i = 0;i < amount;i++){ //Loop through each die and randomly generate number
                var result = Math.floor(Math.random() * faces) + 1;
                currentRoll.push(" " + result); //log current die result
                var total = total + result; //Each rolled die adds to total
            }
            var modifiedTotal = total + modifier;

            if (modifier === 0){ //log the grand total 
                currentRoll.push("Result");
                currentRoll.push(total);
            }else if (modifier < 0){
                currentRoll.push("Result (" + total + modifier + ")");
                currentRoll.push(modifiedTotal);
            }else{        
                currentRoll.push("Result (" + total + "+" + modifier + ")");
                currentRoll.push(modifiedTotal);
            }
        }
        
        if (isNaN(amount) || isNaN(faces) || isNaN(modifier)){ //Displays error message if any die paramaters are NaN
            inputError("NaN");
        }else if (amount > 250){
            inputError("tooLong");
        }else if (amount < 1 || faces < 1 || faces > 250){
            inputError("impossibleDice");
        }else{ //Displays roll and ands it to archive
            pastRolls.unshift(currentRoll);
            displayOnPage(currentRoll);
            archiveRoll();
        }

        if (pastRolls.length > 5){ //Keeps only last 5 rolls in memory
            pastRolls.length = 5;
        }
    }
}

var inputError = function(cause){
    switch(cause) {
        case "NaN":
            var errorHeader = "<h1>Whoops!</h1>"
            var errorBody = "<p>Looks like your dice are messed up. Considering the dice actually need NUMBERS on them to function properly, you need to stop being stupid and put in a normal value.</p>"
            break;
        case "tooLong":
            var errorHeader = "<h1>Whoops!</h1>"
            var errorBody = "<p>Looks like you're trying to roll too many dice! This time, enter a normal number and don't be stupid.</p>"
            break;
        case "impossibleDice":
            var errorHeader = "<h1>Whoops!</h1>"
            var errorBody = "<p>I guess you've never used real dice before, because— <br /> FUN FACT: They can't possibly look like that.</p>"
            break;
        default:
            var errorHeader = "<h1>Whoops!</h1>"
            var errorBody = "<p>An unknown error occurred.</p>"
    }

    document.getElementById('resultContainer').style.height = "0";
    document.getElementById('resultError').style.display = "block";

    document.getElementById('resultError').innerHTML = errorHeader + errorBody;
}

//Quick feature addition 10 years later for Kyle
//Press Enter key to roll
document.addEventListener('keydown', function(e){
	if(e.keyCode === 13) rollDice();
});