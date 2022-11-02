// 1. Write a script that will calculate and display the result of raising 2 to the power of 10, starting from the 1st power.

for (let i = 1; i <= 10; i++)
    console.log(Math.pow(2, i))

// 1*. Convert 1 task into a function that takes as input the power to which the number 2 will be raised.

const Exponenta = function (y) {
    console.log(2 ** y)
}
Exponenta(10)
