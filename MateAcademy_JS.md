## Working with Strings
1. Implement the `getStringLength` function that accepts the `input` string and returns its length (number of characters in it).
```js
function getStringLength(input) {
  return input.length;
}

getStringLength('Orange') // 6
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

removeVowels('document'); //dcmnt
```
5. Implement the `makeAbbr` function that accepts the `words` string and returns an uppercase abbreviation. The `words` string contains one or more words separated by a single space.
```js
function makeAbbr(words) {
  let abbreviation = words[0];
  for (let i = 0; i < words.length; i++) {
    if (words[i] === ' ') {
      abbreviation += words[i + 1];
    }
  }
  return abbreviation.toUpperCase();
}

makeAbbr('central processing unit'); // CPU
makeAbbr('national aeronautics space administration'); // NASA
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

decryptMessage('central processing unit'); // tinu gnissecorp lartnec
```

7. Create the `isWerewolf` function that accepts the `target` string and returns `true` if it's a werewolf or `false` if it isn't. A werewolf is a word or sentence that you can read the same in both directions (left to right and vice versa) ignoring case, spaces, and punctuation.
```js
function isWerewolf(target) {
  var result = '';
  for (let letter of target) {
    if ((!' '.includes(letter)) && (letter.toLowerCase() !== letter.toUpperCase())) {
      result += letter.toUpperCase();
    }
  }

  var newResult = '';
  for (let i = result.length - 1; i >= 0; i -= 1) {
    newResult += result[i];
  }
  console.log(result === newResult);
}

isWerewolf('Pop Kop'); // false
isWerewolf('Was it a rat I saw?'); // true
```

8. We have improved our program for collecting statistics from Misha's webinars. After collecting statistics, it sends data to the server in the form of a `111001010111011` string, where `1` is the student who understood the topic, and 0, unfortunately, did not.
But it would be helpful to understand how many percent of the students learned the material, this will show how effective the webinar was.
Create the `getSuccessRate` function that accepts the `statistic` string and returns the percentage of students who understood the material, rounded to the nearest integer (use the `Math.round` method). Please note: if the input string is empty, return `0`.
```js
function getSuccessRate(statistic) {

if (statistic == ''){
  return 0;
} else {
    let sum = 0;
 
    for (let i = 0; i < statistic.length; i++) {
      sum += parseInt(statistic[i])
    }
  
    return Math.round(sum / statistic.length * 100);
  }
}
```
