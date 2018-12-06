// javascript

function resetGame() {
    chosenLetter = "";
    guessedLetters = [];
    const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const CHARACTERS = ["Bi-Han", "Bo' Rai Cho", "Chameleon", "Cyrax", "Ermac", "Jackson Briggs", "Jade", "Kabal", "Kano", "Kitana", "Kuai Liang", "Kung Lao", "Liu Kang", "Mileena", "Motaro", "Nightwolf", "Rain", "Reptile", "Scorpion", "Sektor", "Shang Tsung", "Shao Kahn", "Sheeva", "Sindel", "Smoke", "Sonya Blade", "Kurtis Stryker"];
    randomCharacter = getRandom(CHARACTERS);
    updateGameState();
    return LETTERS;
}

function getRandom(paramArray) {
    return paramArray[getRandomInteger(0, paramArray.length)];
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function updateGameState() {
    pWins.textContent = "Wins: " + wins;
    pLosses.textContent = "Losses: " + losses;
    let anonymous = "";
    for (let i = 0; i < randomCharacter.length; i++) {
        anonymous = anonymous + " _";
    }
    pCharacter.textContent = "Character: " + anonymous;
    let guessesRemaining = guessLimit - guessedLetters.length;
    pRemaining.textContent = "Guesses Remaining: " + guessesRemaining;
    pGuesses.textContent = "Current Guesses: " + guessedLetters.toString();
}

function guessLetter(paramKey) {
    for (let i = 0; i < remainingLetters.length; i++) {
        if (remainingLetters[i] === paramKey) {
            chosenLetter = remainingLetters.splice(i, 1).toString();
            guessedLetters.push(chosenLetter);
            log();
            compareLetters();
            log();
            return;
        }
    }
    message = paramKey + " is NOT a remaining letter";
    alert(message);
}

function compareLetters() {
    if (chosenLetter === randomLetter) {
        wins++;
        message = "You WIN!!!\nThe letter was: " + randomLetter;
    } else if (guessedLetters.length >= guessLimit) {
        losses++;
        message = "You LOSE!!!";
    } else {
        updateGameState();
        return;
    }
    alert(message);
    remainingLetters = resetGame();
}

function log() {
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Guesses Reamining: " + (guessLimit - guessedLetters.length));
    console.log("Current Guesses: " + guessedLetters.toString());
    console.log("Letters Remaining: " + remainingLetters.toString());
    console.log("Chosen: " + chosenLetter);
    console.log("Random: " + randomCharacter);
    console.log("");
}

let pWins = document.getElementById("wins");
let pLosses = document.getElementById("losses");
let pCharacter = document.getElementById("character");
let pRemaining = document.getElementById("remaining");
let pGuesses = document.getElementById("guesses");

let wins = 0;
let losses = 0;
let remaining = 0;
let guesses = 0;

let guessLimit = 10;
let chosenLetter = "";
let randomLetter = "";
let guessedLetters = [];
// let randomCharacter = getRandomCharacter();
let randomCharacter = "";
let remainingLetters = resetGame();

log();

document.onkeyup = function (eventKeyUp) {
    guessLetter(eventKeyUp.key.toUpperCase());
};

//log();