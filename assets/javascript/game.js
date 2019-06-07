var winCount = 0;
var loseCount = 0;
var guessCount = 9;

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuesses = [];

var winCountText = document.getElementById("win-count");
var loseCountText = document.getElementById("lose-count");
var guessCountText = document.getElementById("guess-count");
var guessesText = document.getElementById("guesses");

var randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();

    if (alphabet.indexOf(userGuess) === -1) {
        alert("Please press a letter.");
    } else {
        if (userGuess === randomLetter) {
            winCount++;
            guessCount = 9;
            userGuesses = [];
            randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
        } else {
            guessCount--;
            userGuesses.push(userGuess);

            if (guessCount === 0) {
                loseCount++;
                guessCount = 9;
                userGuesses = [];
                randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
            };
        };

        winCountText.textContent = "Wins: " + winCount;
        loseCountText.textContent = "Losses: " + loseCount;
        guessCountText.textContent = "Guesses left: " + guessCount;
        guessesText.textContent = "Your guesses so far: " + userGuesses;

    };
};


