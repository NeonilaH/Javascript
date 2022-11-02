// 4**. Write a function that checks if a word is a palindrome. e.g. `function isPalindrom(word)`. Checks: 'abba', 'Abba'.

function checkPalindrome(word) {
    word = word.toLowerCase();
    for (let i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[word.length - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
console.log(checkPalindrome("Abba"))
console.log(checkPalindrome("abba"))
console.log(checkPalindrome("bnckibu"))
