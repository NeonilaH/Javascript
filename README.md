## 1st JS homework:

### [Javascript HW 1-1.js](https://github.com/NeonilaH/Javascript/blob/main/Javascript%20HW%201-1.js)

 1. Create a variable `item_1`
 2. Assign the variable `item_1` the number 5.
 3. Print `item_1` to the console.
 4. Create variable `item_2`.
 5. Assign the variable `item_2` the number 3.
 6. Print `item_2` to the console.
 7. Create variable `item_3`.
 8. Assign the `item_3` variable the addition of `item_1` and `item_2`.
 9. Print `item_3` to the console.
 10. Create variable `item_4`.
 11. Assign the string 'Yolochka' to the variable `item_4`.
 12. Print item_4 to the console.
 13. Display the addition of `item_3` and `item_4` to the console.
 14. Print the multiplication of `item_3` and `item_4` to the console.
 15. Create variable `item_5`.
 16. Assign item_5 to `item_3`.
 17. Create variable `item_6`.
 18. Create variable `item_6_type`.
 19. Set variable `item_6` to 15.
 20. Assign `item_6`_type variable the type of `item_6` variable.
 21. Print the `item_6` data type to the console as `“item_6 == ” item_6, “item_6_type == ” item_6_type`.
 22. Create variable `item_7` and convert `item_6` to String in it.
 23. Create variable `item_7_type`.
 24. Assign `item_7_type` variable the type of `item_7` variable
 25. Print the item_7 data type to the console as  `“item_7 == ” item_7, “item_7_type == ” item_7_type`.
 26. Create a variable `age_1` and assign the value 10 to it.
 27. Create variable `age_2` and assign value 18 to it.
 28. Create variable `age_3` and assign value 60 to it.
 29. Create an if in which you will check the value of the variable `age_1`.
 30. If `age_1` < `age_2`, print to console `“You don’t have access cause your age is” + age_1 + “It’s less then”`.
 31. If `age_1` >= `age_2` and `age_1` < `age_3`, Print `“Welcome!”`
 32. If `age_1` > `age_3`, Print `“Keep calm and look Culture channel”` to the console.
 33. Otherwise print `"Technical work"`.

## Tasks with different number of stars :)

### [Javascript HW 1-2.js](https://github.com/NeonilaH/Javascript/blob/main/Javascript%20HW%201-2.js)

1*:
Convert the written code in 26-33 into a function that takes `age` as input.
Example: 
```js
const checkAge = function(age) {
Your transformations
}
```
Print to the console the result of the function with ages 17, 18, 61.

### [Javascript HW 1-3.js](https://github.com/NeonilaH/Javascript/blob/main/Javascript%20HW%201-3.js)
2*:
Convert assignment 1* so that the data type is checked first in the function. And if it is not a Number, an error was thrown.

### [Javascript HW 1-4.js](https://github.com/NeonilaH/Javascript/blob/main/Javascript%20HW%201-4.js)
3**:
Convert 2* so that the value '2' (the string containing ONLY NUMBER) is omitted when converted to number.

### [Javascript HW 1-5](https://github.com/NeonilaH/Javascript/tree/main/Javascript%20HW%201-5)
4***:
Convert task 3* so that the age is entered using the prompt function in the linked layout.

## 2nd JS homework with asterisks:

1. Write a script that will calculate and display the result of raising 2 to the power of 10, starting from the power of 1

1*. Convert 1 task into a function that takes as input the power to which the number 2 will be raised

2. Write a script that will output 5 lines to the console in such a way that :) is displayed on the first line, :) :) on the second line, and so on
Console example:
```
:)
:):)
:) :) :)
:):):):):)
:):):):):):)
```

2*. Convert task 2 into a function that takes a string as input, which will be output to the console (as in the smiley condition), as well as the number of lines to output
e.g. `function printSmile(line, numberOfRows)`

3**. Write a function that takes a word as input. The task of the function is to calculate and output to the console how many vowels and how many consonants are in the word.
e.g. `function getWordStructure(word)`
In console:
`The word (word) consists of (number) vowels and (number) consonants`

Checks: 'case', 'Case', 'Check-list'

4**. Write a function that checks if a word is a palindrome
e.g. function isPalindrom(word)

Checks: 'abba', 'Abba'
task 1.

Write a function that will find and display in the console users registered on 10/09/2021 and 10/10/2021). Array in task1.txt

Task 2*

Open the task2.json file in VSCode. Copy the JSON from it, paste it into your code (by assigning it to a variable).

Given an array of objects. Each object is an identification card of a person. We only need to store unique values ​​in this array. Implement a function that will do the job.

Task 2*** Implement reading from JSON from the task2.json file using, for example, the fs module. for further use in the function described in the assignment

Task 3**
In the file task3.txt you will find the structure of the company and the tasks you need to complete.

Note: It is not necessary to complete ALL tasks if it is very difficult for you. But the FIRST - right above all :)

Task 4****

In the task4.txt file you will find a multi-level array of objects. Very similar to the array from the 3rd task, only the number of nestings can be unlimited.

Task: write a function:

The function builds a tree-like list of companies.
When it is called, a list of company departments should be displayed in the console, indicating the number of employees and respecting the nesting of departments.
