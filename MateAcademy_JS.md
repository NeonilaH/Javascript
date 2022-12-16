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

getLocation([0, 0], ['forward', 'right']); // [1, 1]
```

5. And now it's time to increase the production of our robots! Implement the `getPlan` function that takes 3 arguments:
`startProduction` — the number of robots we currently produce per month;
`numberOfMonths` — the number of months for the production growth;
`percent` — the expected percentage increase in production each month.
The function should return an array with goals for the given `numberOfMonth`. Please note: the goal for the next month is based on the previous month.
If the number of robots is a fraction, round it down using the `Math.floor`.

```js
function getPlan(startProduction, numberOfMonths, percent) {
    const goals = [];
    let currentProduction = startProduction;
    for (i = 1; i <= numberOfMonths; i++) {
        currentProduction += Math.floor(currentProduction * percent / 100);
        goals.push(currentProduction);
    }
    return goals;
}

getPlan(10, 4, 30); // [13, 16, 20, 26]
```
6. The first batch of robots is ready. Now they need to be tested. All robots are unique, and each has its own speed. In this task, you need to find the robots' lowest, highest, and average speed. Implement the `getSpeedStatistic` function, that accepts the `testResults` array of robots' speeds and returns statistics as an array with 3 numbers: the first one is the lowest speed; the second is the highest speed; the last one is the average speed, rounded down (use `Math.floor`).
Please note: if the testResults array is empty, return `[0, 0, 0]`.
```js
function getSpeedStatistic(testResults) {

    if (testResults.length === 0) {
        return [0, 0, 0];
    }

    let min = testResults[0];
    let max = testResults[0];
    let sum = 0;

    for (const test of testResults) {
        sum += test;
        if (test < min) {
            min = test;
        }
        else if (test > max) {
            max = test;
        }
    }
    let avarage = Math.floor(sum / testResults.length);
    return [min, max, avarage];
}

getSpeedStatistic([]); // [0, 0, 0]
getSpeedStatistic([10]); // [10, 10, 10]
getSpeedStatistic([8, 9, 3, 12]); // [3, 12, 8]
```

7. Let's write the `compareRobots` function that accepts two arrays. The first array is `firstRobotResults` — the weight of the goods delivered during a day by the first robot, and the second array is `secondRobotResults` — by the second one. Check which robot can carry more weight, and return a recommendation which robot is worth buying: 
`'First robot for sale!'` — if the first robot carries more weight; 
`'Second robot for sale!'` — if the second robot carries more weight;
`'Both robots for sale!'` — if both robots carry the same weight.
```js
function compareRobots(firstRobotResults, secondRobotResults) {
    let firstSum = 0;
    let secondSum = 0;

    for (let first of firstRobotResults) {
        firstSum += first;
    }

    for (let second of secondRobotResults) {
        secondSum += second;
    }

    if (firstSum > secondSum) {
        return `First robot for sale!`;
    }
    else if (firstSum < secondSum) {
        return `Second robot for sale!`;
    }
    else {
        return `Both robots for sale!`;
    }

}

compareRobots([12, 4, 13], [1, 1, 4, 5, 12]); // 'First robot for sale!' (29 > 23)
compareRobots([9, 7, 9], [1, 3, 4, 5, 12]); // 'Both robots for sale!' (25 = 25)
compareRobots([1, 3, 4], [1, 1, 4, 5]); // 'Second robot for sale!' (8 < 11)
```

## Additional tasks
1. Write the `checkNumber` function that accepts an integer `number` and checks it against 3 criteria:
is this number positive?
is this an even number?
is this number divisible by 10?
The function should return an array with the results of the checks as booleans: `true` or `false`.
```js
function checkNumber(number) {
return [number > 0, number % 2 === 0, number % 10 === 0]
  }
  
checkNumber(3); // [true, false, false]
checkNumber(10); // [true, true, true]
checkNumber(0); // [false, true, true]
checkNumber(-1); // [false, false, false]  
```
2. Implement the `calculateProfit` function that accepts 3 parameters: `amount` — the initial amount that we deposit;  `percent` — annual interest rate;
`period` — the number of years (the time for which the money is deposited). The function should calculate and return the total net profit for the entire period.
```js
function calculateProfit(amount, percent, period) {

    let total = amount;

    for (let i = 1; i <= period; i++) {
        total += total * percent / 100;
    }
    
    return Math.floor(total - amount);
}

calculateProfit(1000, 5, 1); // 50
calculateProfit(12500, 3, 12); // 5322
```
3. Implement the `getArraysSum` function that accepts two arrays of numbers of equal length and returns the sum of all the elements of these arrays.
```js
function getArraysSum(arr1, arr2) {

  let sum = 0;
  for (let i = 0; i < arr1.length; i++){
    sum += arr1[i] + arr2[i];
  }

  return sum;
}
```
4. Implement the `combineArrays` function that accepts 2 arrays of numbers of the same size (`first` and `second`) and returns an array of numbers, where `result[i]` is the sum of `first[i]` and `second[i]`.
```js
function combineArrays(first, second) {

  let result = [];
  for (let i = 0; i < first.length; i++) {
    result.push(first[i] + second[i])
  }
  return result
}

combineArrays([1, 2, 5], [3, 6, 1]); // [4, 8, 6]
combineArrays([1], [6]); // [7]
combineArrays([], []); // []
```
