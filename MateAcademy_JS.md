## Working with Strings
1. Implement the `getStringLength` function that accepts the `input` string and returns its length (number of characters in it).
```js
function getStringLength(input) {
  return input.length
}
```
2. Implement the 'isSubstring' function that accepts 2 parameters: 'phrase' and 'part'. It should return true if the 'phrase' contains the 'part' or false otherwise.
```js
function isSubstring(phrase, part) {
  return phrase.includes(part)
}

isSubstring('string', 's'); // true
isSubstring('string', 'ring'); // true
isSubstring('string', 'bring'); // false
```