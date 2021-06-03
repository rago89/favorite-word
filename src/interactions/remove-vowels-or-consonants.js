"use strict";

console.log("--- loading interaction -->");

/**
 * allows a user to see their word with all the vowels or all the consonants removed
 */
const removeVowelsOrConsonants = () => {
  let userSelection = "";
  let letterRemoved = "";
  if (favoriteWord === "") {
    alert("You have to add word");
  }
  userSelection = chooseFromOptions(["vowels", "consonants"]);
  if (userSelection === "vowels") {
    // remove vowels
    letterRemoved = removeCharacters(favoriteWord, "aeiou");
    return alert(letterRemoved);
  } else {
    // remove consonants
    letterRemoved = removeCharacters(favoriteWord, "bcdfghjklmnpqrstvwxyz");
    return alert(letterRemoved);
  }
};
