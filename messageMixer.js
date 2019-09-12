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
