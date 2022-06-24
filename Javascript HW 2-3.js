// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв
//Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word) {

    let vowelsArray = ['a', 'e', 'i', 'o', 'u']
    let consonantsArray = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'z']
    let tempArray = word.toLowerCase().split('')
    let vowelsSum = tempArray.filter(x => vowelsArray.includes(x)).length;
    let consonantsSum = tempArray.filter(x => consonantsArray.includes(x)).length;
    console.log("Слово " + word + " состоит из " + vowelsSum + " гласных и " + consonantsSum + " согласных букв")

}
getWordStructure('case')
getWordStructure('Case')
getWordStructure('Check-list')