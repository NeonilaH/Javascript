## Working with Strings
1. Implement the `getStringLength` function that accepts the `input` string and returns its length (number of characters in it).
```js
function getStringLength(input) {
  return input.length;
}
```
2. Implement the `isSubstring` function that accepts 2 parameters: `phrase` and `part`. It should return true if the `phrase` contains the `part` or false otherwise.
```js
function isSubstring(phrase, part) {
  return phrase.includes(part);
}

isSubstring('string', 's'); // true
isSubstring('string', 'ring'); // true
isSubstring('string', 'bring'); // false
```
3. Implement the `countMs` function that accepts the `text` string and returns the number of `m` letters in it (uppercase and lowercase).
```js
function countMs(text) {
    var count = 0;
    for (let letter of text) {
        if (letter === 'M' || letter === 'm') {
            count++;
        }
    }
    return count;
}

countMs('document'); // 1
countMs('Mermaid'); // 2
countMs('code'); // 0
```
4. Write the `removeVowels` function that takes the `doc` string and returns a string with all the letters from the `doc` except the vowels.
```js
function removeVowels(doc) {
    let result = '';
    let vowels = 'aeiouyAEIOUY';
 
    for (let letter of doc) {
      if(!vowels.includes(letter)) {
        result+=letter;
      }
    }
  return result;
}

removeVowels('document');
```
5. Implement the `makeAbbr` function that accepts the `words` string and returns an uppercase abbreviation. The `words` string contains one or more words separated by a single space.
```js
function makeAbbr(words) {
  let abbreviation = words[0];
  for (let i = 0; i <= words.length; i++) {
    if (words[i] === ' ') {
      abbreviation += words[i + 1];
    }
  }
  return abbreviation.toUpperCase();
}

makeAbbr('central processing unit');
makeAbbr('national aeronautics space administration');
```
6. Create the `decryptMessage` function that accepts the `message` string and returns a string with the characters from the `message` but in the reverse order.
```js
function decryptMessage(message) {

  let result = '';
  for (let i = message.length - 1; i >= 0; i--) {
    result += message[i];
  }
  return result;
}

decryptMessage('central processing unit');
```

7. Create the `isWerewolf` function that accepts the `target` string and returns `true` if it's a werewolf or `false` if it isn't. A werewolf is a word or sentence that you can read the same in both directions (left to right and vice versa) ignoring case, spaces, and punctuation.
```js
function isWerewolf(target) {
  var result = '';
  for (let letter of target) {
    if ((!' '.includes(letter)) && (letter.toLowerCase() !== letter.toUpperCase())) {
      result += letter;
    }
  }

  var newResult = '';
  for (let i = result.length - 1; i >= 0; i -= 1) {
    newResult += result[i];
  }
  return result === newResult;
}
```



