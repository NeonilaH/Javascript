// 3**. Write a function that takes a word as input. The task of the function is to calculate and output to the console how many vowels and how many consonants are in the word. e.g. function getWordStructure(word). In console: The word (word) consists of (number) vowels and (number) consonants. Checks: 'case', 'Case', 'Check-list'.

function getWordStructure(word) {

    let vowelsArray = ['a', 'e', 'i', 'o', 'u']
    let consonantsArray = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
    let tempArray = word.toLowerCase().split('')
    let vowelsSum = tempArray.filter(x => vowelsArray.includes(x)).length;
    let consonantsSum = tempArray.filter(x => consonantsArray.includes(x)).length;
    console.log("The word " + word + " consists of " + vowelsSum + " vowels and " + consonantsSum + " consonants.")

}
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')
