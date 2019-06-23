var villains = ["Ultron", "Thanos", "Mystique", "Joker", "Magneto", "Loki", "Joffrey", "Voldemort", "Sauron", "Venom"];

var numWins = 0;
var numLosses = 0;
var numGuesses = 10;
var blankList = [];
var newBlank;

var word = villains[Math.floor(Math.random() * villains.length)].split("");

console.log(word);
console.log(word.length);

for (var k = 0; k < word.length; k++) {
    blankList.push(" _ ");
}
console.log(blankList);

function updateBlankList() {
    for (var i = 0; i < blankList.length; i++) {
        newBlank = document.getElementById("blanks");
        newBlank.textContent += blankList[i];
    }
}

function resetContent() {
    document.getElementById("blanks").innerHTML = "";   
}

function wordChecker(x) {
    if (x === word[0].toLowerCase()) {
        return true;
    }
    else {
        return word.includes(x);
    }
}
function resetGame (){
    resetContent();
    word = villains[Math.floor(Math.random() * villains.length)].split("");
    blankList = [];
    for (var k = 0; k < word.length; k++) {
        blankList.push(" _ ");
    }
    
    updateBlankList();
    document.getElementById("guesses").textContent = "";
    numGuesses = 10;
    remainingGuess();
    
}
function findReplace(x, y, z) {
    var index = [];

    x.forEach(function (elem, i) {
        if (elem.toLowerCase() === z) {
            index.push(i);
        }
        return index;
    });

    for (var j = 0; j < index.length; j++) {

        if (index[j] === 0) {
            y[index[j]] = z.toUpperCase();
        }
        else {
            y[index[j]] = z;
        }
    }
    return y;

}

function userWin() {
    if (blankList.toString() == word.toString()) {
        alert("Congrats!!! You got it.")
        numWins++;
        document.getElementById("winCount").innerHTML = numWins;
        resetGame();
         
    }
    else {
        document.getElementById("winCount").innerHTML = numWins;
    }
}

function userLoss() {
    if (numGuesses === 0) {
        alert("Oh no! You couldn't catch the  " + word.join(""));
        numLosses++;
        document.getElementById("lossCount").innerHTML = numLosses;
        resetGame();
    }
    else {
        document.getElementById("lossCount").innerHTML = numLosses;
    }
}

function wrongGuess(item){
    document.getElementById("guesses").textContent += item + " ";
}

function remainingGuess() {
    document.getElementById("guessCount").innerHTML = numGuesses;
}



document.addEventListener("DOMContentLoaded", function () {
    updateBlankList();
    userLoss();
    userWin();


});

document.onkeyup = function (event) {
    var userInput = event.key;
    // update appropriate blank position on correct key press
    if (wordChecker(userInput)) {
        findReplace(word, blankList, userInput);
        resetContent();
        updateBlankList();
        userWin();
        userLoss();
    }
    else {
        // wrong guess updated
        wrongGuess(userInput);
        numGuesses--;
        remainingGuess();
        userLoss();
        userWin();

    }


};



