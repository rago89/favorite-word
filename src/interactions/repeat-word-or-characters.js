"use strict";

console.log("--- loading interaction -->");

/**
 * allows a user to see either the whole word repeated, or their word with each character repeated.
 * if there is no word, the user is told so
 */
const repeatWordOrCharacters = () => {
  // 1. if there is no saved word, call displayWord and exit early
  let userOption = "";
  let userOutput = "";
  let userNumber = 1;
  if (favoriteWord === "") {
    alert("you do not have a favorite word");
    return;
  }
  // 2. use chooseBetween to let the user select 'word' or 'characters'
  userOption = chooseFromOptions(["word", "characters"]);
  // 3. use enterNumber to ask the user how many times to repeat
  userNumber = enterNumber("Please enter the number of repetitions");
  // 4. use repeatString or repeatCharacters to create a new string, depending on user the user's choice
  if (userOption.toLowerCase().includes("word")) {
    userOutput = repeatString(favoriteWord, userNumber);
    return alert(userOutput);
  } else {
    userOutput = repeatCharacters(favoriteWord, userNumber);
    return alert(userOutput);
  }
};
