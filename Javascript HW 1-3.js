// 2*: Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.

let age_2 = 18
let age_3 = 60
const checkAge = function (age_1) {
    if (typeof (age_1) === 'number') 
    {
        if (age_1 < age_2) { console.log("You don’t have access cause your age is " + age + ". It’s less than ") }
        else if (age_1 >= age_2 && age_1 < age_3) {
            console.log("Welcome !")
        }
        else if (age_1 > age_3) {
            console.log("Keep calm and look Culture channel")
        }
        else {
            console.log("Technical work")
        }
    } else {
        console.log("Error")
    }
}
checkAge(21)
checkAge("yuvydtv")
