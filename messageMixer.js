//count the characters in a message
const countCharacter = function (inputString, inputCharacter) {
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
            count++;
        }
    }
    return count;
};
// capitalize the first character of words
const capitalizeFirstCharacterOfWords = function (string) {
    let arr = string.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        arr[i] = word[0].toUpperCase() + word.substring(1);
    }
    return arr.join(" ");
};
// reverse a message's words in place
const reverseWord = function (word) {
    return word.split("").reverse().join("");
};
// reversing characters in place
const reverseAllWords = function (sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i]);
    }
    return words.join(" ");
};
