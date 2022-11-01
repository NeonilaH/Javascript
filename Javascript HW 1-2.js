// 1*. Convert the code written in 26-33 into a function that takes `age` as input. Example: `const checkAge = function(age) { Your transformations }`. 
// Print to the console the result of the function with ages 17, 18, 61.

const checkAge = function (age_1) {
    let age_2 = 18;
    let age_3 = 60;

    if (age_1 < age_2) {
        console.log("You don’t have access cause your age is " + age_1 + ". It’s less than " + age_2 + ".")
    }
    else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("Welcome !")
    }
    else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel")
    }
    else {
        console.log("Technical work")
    }
}

checkAge(17)
checkAge(18)
checkAge(61)
