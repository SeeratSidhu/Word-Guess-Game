var villains = ["Ultron", "Thanos", "Mystique", "Joker", "Magneto", "Loki", "Joffrey", "Voldemort", "Sauron", "Venom"];

var numWins = 0;
var numLosses = 0;
var numGuesses = 10;
var gamePlay = true;
var blankList = [];
var newBlank;

var word = villains[Math.floor(Math.random() * villains.length)].split("");

console.log(word);
console.log(word.length);

for (var k = 0; k <word.length; k++) {
    blankList.push(" _ ");
}
console.log(blankList);

document.addEventListener("DOMContentLoaded", function(){
    for (var i = 0; i < blankList.length; i++) {
        newBlank = document.getElementById("blanks");
        newBlank.textContent += blankList[i];   
    }
});
 
function wordChecker(x){
    return word.toLowerCase().includes(x);
}

function replaceBlank (y){
    var index = word.indexOf(y);

}


document.onkeyup = function (event) {
    


    for (var j = 0; j < word.length; j++){
        if (event.key === word[j] ){
            return event.key;
        }
        else {
            document.getElementById("guesses").textContent += event.key + " ";
            break;
        }
       }
    
};


