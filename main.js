import {
    countCharacter,
    capitalizeFirstCharacterOfWords,
    reverseWord,
    reverseAllWords,
    replaceFirstOccurence,
    replaceAllOccurences,
    encode,
    palindrome,
    pigLatin
} from './messageMixer';
// displaying the functions
function displayMessage() {
    let str = 'What is the color of the sky?';
    console.log('countCharacter: ' + countCharacter(str, 't'));
    console.log('capitalized: ' + capitalizeFirstCharacterOfWords(str));
    console.log('reverseWord: ' + reverseWord(str));
    console.log('reverseAll: ' + reverseAllWords(str));
    console.log('replaceFirst: ' + replaceFirstOccurence(str, 'sky', 'water'));
    console.log('replaceAll: ' + replaceAllOccurences(str, 'sky', 'water'));
    console.log('encode: ' + encode(str));
    console.log('palindrome: ' + palindrome(str));
    console.log('pigLatin: ' + pigLatin(str, '@'));
};


displayMessage();
