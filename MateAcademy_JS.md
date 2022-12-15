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
        if (!vowels.includes(letter)) {
            result += letter;
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

8. We have improved our program for collecting statistics from Misha's webinars. After collecting statistics, it sends data to the server in the form of a `111001010111011` string, where `1` is the student who understood the topic, and `0`, unfortunately, did not.
But it would be helpful to understand how many percent of the students learned the material, this will show how effective the webinar was.
Create the `getSuccessRate` function that accepts the `statistic` string and returns the percentage of students who understood the material, rounded to the nearest integer (use the `Math.round` method). Please note: if the input string is empty, return `0`.
```js
function getSuccessRate(statistic) {
    if (statistic === '') {
        return 0;
    }

    let count = 0;

    for (const i of statistic) {
        if (i === '1') {
            count++;
        }
    };

    return Math.round(count * 100 / statistic.length);
}

getSuccessRate(''); // 0
getSuccessRate('11100'); // 60
getSuccessRate('1100'); // 50
getSuccessRate('000000'); // 0
getSuccessRate('11111'); // 100
```

## Array Basics
1. Write the `createArray` function that accepts the integer `N` and returns an array containing integers from `1` to `N` inclusive.
```js
function createArray(N) {
    let arr = [];

    for (let i = 1; i <= N; i++) {
        arr.push(i);
    }
    
    return arr;
}

createArray(1); // [1]
createArray(3); // [1, 2, 3]
createArray(0); // []
```

2. For the robots on the line to assemble correctly, it is necessary to mark the parts. Different parts of the robot consist of a different number of details. Let's make stickers for them! Write the `makeStickers` function that accepts the `detailsCount` integer and the `robotPart` string. The function returns an array of strings in the following format: `{{robotPart}} detail #{{n}}` (for example, `Hand detail #1`). Please note: return an empty array if `detailsCount = 0`.
```js
function makeStickers(detailsCount, robotPart) {
    let N = [];
    
    for (let i = 1; i <= detailsCount; i++) {
        N.push(`${robotPart} detail #${i}`);
    }
    
    return N;
}

makeStickers(3, 'Body'); // ['Body detail #1', 'Body detail #2', 'Body detail #3']
makeStickers(4, 'Head'); // ['Head detail #1', 'Head detail #2', 'Head detail #3', 'Head detail #4']
makeStickers(0, 'Foot'); // []
```

3. Implement the `doublePower` function that accepts the array of powers — `currentPowers`, and returns a new array of doubled powers.
```js
function doublePower(currentPowers) {
    let doublePowers = [];

    for (let i = 0; i < currentPowers.length; i++) {
        doublePowers.push(currentPowers[i] * 2);
    }

    return doublePowers;
}

doublePower([100, 150, 200, 220]); // [200, 300, 400, 440]
doublePower([45, 34, 56, 67]); // [90, 68, 112, 134]
doublePower([]); // []
```

4. Let's complicate our robots! Now they can convert motion commands into the correct signal and move according to them: 
`'forward'` means `y + 1`;
`'back'` means `y - 1`;
`'right'` means `x + 1`;
`'left'` means `x - 1`.
But it would be great if the robot knew its current location without GPS. To do this, implement the `getLocation` function, that accepts 2 parameters:
`coordinates` — the array of initial coordinates in the `[x, y]` form;
`commands` — the array with command history in the `['command1', 'command2', 'command3' ...]` form.
The function should return an array of final coordinates `([x, y])` after movements according to the commands.
For example, we have the coordinates = `[2, 1]` and commands = `['left', 'back', 'back']` arrays:
coordinates after the first command — `[1, 1]` (1 step left);
coordinates after the second command — `[1, 0]` (1 step back);
coordinates after the third command — `[1, -1]` (1 step back);
the result is the `[1, -1]` array.
```js
function getLocation (coordinates, commands) {
  let x = coordinates[0];
  let y = coordinates[1];

  for (const command of commands) {
    if (command === 'back') {
      y--;
    }

    if (command === 'forward') {
      y++;
    }

    if (command === 'left') {
      x--;
    }

    if (command === 'right') {
      x++;
    }
  }

  return [x, y];
}
```
