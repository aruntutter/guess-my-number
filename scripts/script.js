"use strict";

const guessEl = document.getElementById("user-input");
const btnGuess = document.getElementById("btn-guess");
const resultEl = document.getElementById("result");
const guessesEl = document.getElementById("guesses");
const btnRest = document.getElementById("reset");

// Global variable
let guesses;
let randomNumber;

// Functions

const init = () => {
  //this fun. is having all initial settings
  guesses = 0;
  randomNumber = getRandomNumber();
};

const getRandomNumber = () => {
  const randomNumber = Math.trunc(Math.random() * 100) + 1;
  // if *100); it will generate 0,1,2...99
  //if *100)+1; it will generate 1,2,...100
  return randomNumber;
};

// event listener
btnGuess.addEventListener("click", () => {
  const userGuess = Number(guessEl.value);

  if (userGuess) {
    if (userGuess > randomNumber) {
      guesses += 1;
      resultEl.innerText = `Your Guess is high`;
    } else if (userGuess < randomNumber) {
      guesses += 1;
      resultEl.innerText = `Your Guess is low`;
    } else if (userGuess === randomNumber) {
      guesses += 1;
      resultEl.innerText = `Your Guess is Correct \nand the number is ${randomNumber}!`;
      guessesEl.innerText = `You have guessed in '${guesses}' chances`;
    }
  } else {
    // validation
    alert(`You should guess a number`);
  }
});

// initial setup
init();

// reset
const reset = () => {
  guessEl.value = "";
  resultEl.innerText = "";
  guessesEl.innerText = "";
  init();
};

btnRest.addEventListener("click", reset);
