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
// replace the first occurence of a string
const replaceFirstOccurence = function (string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
};
// replace all occurence of a string
const replaceAllOccurences = function (string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
};
// encode text by swapping certain characters for other characters
const encode = function (string) {
    let replacementObject = {
        "a": "@",
        "s": "$",
        "i": "!",
        "o": "0"
    };
    for (let key in replacementObject) {
        string = replaceAllOccurences(string, key, replacementObject[key]);
    }
    return string;
};
// palindrome
const palindrome = function (str) {
    return str + ' ' + reverseWord(str);
};
// piglatin
const pigLatin = function (sentence, character) {
    return sentence.split(' ').join(character + ' ');
};
