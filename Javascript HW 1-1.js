// 1. Create a variable `item_1`.
// 2. Assign the number 5 to the variable `item_1`.
let item_1 = 5;

// 3. Print `item_1` to the console.
console.log(item_1);

// 4. Create variable `item_2`.
// 5. Assign the number 3 to the variable `item_2`. 
let item_2 = 3;

// 6. Print `item_2` to the console.
console.log(item_2);

// 7. Create variable `item_3`.
// 8. Assign the addition of `item_1` and `item_2` to the variable `item_3`.
let item_3 = item_1 + item_2;

// 9. Print `item_3` to the console.
console.log(item_3);

// 10. Create variable `item_4`.
// 11. Assign the string 'Yolochka' to the variable `item_4`.
let item_4 = "Yolochka";

// 12. Print `item_4` to the console.
console.log(item_4);

// 13. Display the addition of `item_3` and `item_4` to the console.
console.log(item_3 + item_4);

// 14. Print the multiplication of `item_3` and `item_4` to the console.
console.log(item_3 * item_4);

// 15. Create variable `item_5`.
// 16. Assign `item_5` to `item_3`.
let item_5 = item_3;

// 17. Create variable `item_6`.
// 18. Create variable `item_6_type`.
// 19. Assign 15 to variable `item_6`.
// 20. Assign the type of `item_6` variable to `item_6_type` variable.
let item_6 = 15;
let item_6_type = typeof(item_6);

// 21. Print the `item_6` data type to the console as `“item_6 == ” item_6, “item_6_type == ” item_6_type`.
console.log("item_6 == " + item_6 + ", " + "item_6_type == " + item_6_type);

// 22. Create variable `item_7` and convert `item_6` to string in it.
let item_7 = item_6.toString();

// 23. Create variable `item_7_type`.
// 24. Assign the type of `item_7` variable to `item_7_type` variable.
let item_7_type = typeof(item_7);

// 25. Print the `item_7` data type to the console as  `“item_7 == ” item_7, “item_7_type == ” item_7_type`.
console.log("item_7 == " + item_7 + ", "+ "item_7_type == " + item_7_type);

// 26. Create a variable `age_1` and assign the value 10 to it.
let age_1 = 10;

// 27. Create variable `age_2` and assign value 18 to it.
let age_2 = 18;

// 28. Create variable `age_3` and assign value 60 to it.
let age_3 = 60;

// 29. Create an `if` in which you will check the value of the variable `age_1`.
// 30. If `age_1` < `age_2`, print to console `“You don’t have access cause your age is” + age_1 + “It’s less then”`.
// 31. If `age_1` >= `age_2` and `age_1` < `age_3`, print `“Welcome!”`.
// 32. If `age_1` > `age_3`, print `“Keep calm and look Culture channel”` to the console.
// 33. Otherwise print `"Technical work"`.
if (age_1 < age_2) {
    console.log("You don't have access cause your age is " + age_1 + ". It's less than " + age_2 + ".")
}
else if (age_1 >= age_2 && age_1 < age_3) {
    console.log("Welcome!");
}
else if (age_1 > age_3) {
    console.log("Keep calm and look culture channel");
}
else { 
    console.log("Technical work") 
}
