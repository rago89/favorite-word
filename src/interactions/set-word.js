"use strict";

console.log("--- loading interaction -->");

/**
 * allows a user to set a new value for the saved word.
 * if there is no saved word, the user is told so and the interaction ends.
 * if there is a saved word, the user is asked to confirm replacing it.
 * if the user confirms, they enter a new word that replaces the old one.
 */
const setWord = (message = "enter a word") => {
  let userConfirmed = false;
  const wordRegex = /^[a-z|-]*$/i;
  // an I/O loop:
  while (!userConfirmed) {
    //  a. prompt the user for a word
    favoriteWord = prompt(message);
    // make sure user input
    if (favoriteWord === "" || favoriteWord === null) continue;
    //  b. check if the input is actually a word (hint at the bottom of this page)
    if (wordRegex.test(favoriteWord)) {
      //  c. if it is a word, return the user input
      userConfirmed = confirm(`do you want to enter this word "${favoriteWord}"`);
    } else {
      alert("is not a word");
    }
    //  d. otherwise prompt the user again
  }
  return favoriteWord;
};
