"use strict";

console.log("--- loading prompt --> ");

/**
 * a function that prompts the user to enter a word
 * if the user enters nothing or cancels, it will prompt them again
 * the input must contain only letters or hyphens, otherwise the user is prompted again
 * @param {string} [message='enter a word'] - what the user will read in the prompt
 * @returns {string} the user input, it will not be empty
 */
const enterWord = (message = "enter a word") => {
  let userConfirmed = false;
  let input = "";
  const wordRegex = /^[a-z|-]*$/i;
  // an I/O loop:
  while (!userConfirmed) {
    //  a. prompt the user for a word
    input = prompt(message);
    // make sure user input a favorite word
    if (input === "" || input === null) continue;
    //  b. check if the input is actually a word (hint at the bottom of this page)
    if (wordRegex.test(input)) {
      //  c. if it is a word, return the user input
      userConfirmed = confirm(`do you want to enter this word "${input}"`);
    } else {
      alert("is not a word");
    }
    //  d. otherwise prompt the user again
  }
  return input;
};

{
  // store I/O functions and console.log for later
  const consoleLog = console.log;
  const globalPrompt = prompt;
  const globalConfirm = confirm;
  const globalAlert = alert;
  // over-write non-interactive I/O with empty functions
  alert = () => {};
  console.log = () => {};
  // a function that simulates a user inputting a series of values
  const mockUser = (values, index = 0) => () => values[index++];

  try {
    prompt = mockUser(["yes", "yes"]);
    confirm = mockUser([false, true]);
    console.assert(enterWord() === "yes", "Test 1");

    prompt = mockUser(["no"]);
    confirm = mockUser([true]);
    console.assert(enterWord() === "no", "Test 2");

    prompt = mockUser(["x", "y", "z"]);
    confirm = mockUser([false, false, true]);
    console.assert(enterWord() === "z", "Test 3");

    prompt = mockUser(["dogs", "m1c3", "dogs"]);
    confirm = mockUser([false, true]);
    console.assert(enterWord() === "dogs", "Test 4");

    prompt = mockUser(["white chocolate", "white-chocolate", "dark-chocolate"]);
    confirm = mockUser([false, true]);
    console.assert(enterWord() === "dark-chocolate", "Test 5");
  } catch (err) {
    console.error(err);
  }

  // reassign the global functions now that testing is over
  prompt = globalPrompt;
  confirm = globalConfirm;
  alert = globalAlert;
  console.log = consoleLog;
}

{
  // hint: you can use this regex to test if a string is a word
  //  let's say a word is anything with only letters and hyphens
  const wordRegex = /^[a-z|-]*$/i;

  // strings with only letters and hyphens will return true
  const isAWord1 = wordRegex.test("asdf");
  const isAWord2 = wordRegex.test("---");
  const isAWord3 = wordRegex.test("as-df");

  // strings with anything else will return false
  const isNotAWord1 = wordRegex.test("1234");
  const isNotAWord2 = wordRegex.test("12-cd");
  const isNotAWord3 = wordRegex.test("12df");

  null;
}
