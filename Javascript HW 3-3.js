// Task 2*** Реализуйте считывание из JSONки из файла task2.json с помощью, например, модуля fs. для дальнейшего использования в функции, описанной в задании
        // Task 2*
        // Дан массив объектов. Каждый объект является идентификационной карточкой человека. Нам нужно хранить только уникальные значения в этом массиве. Реализуйте функцию, которая будет выполнять эту работу.

const fs = require('fs');
const user = JSON.parse(fs.readFileSync("HW 3 data/task2.json"))

const uniqueCardsObjects = Array.from(new Set(user.map(JSON.stringify))).map(JSON.parse)

console.log(uniqueCardsObjects)
console.log("The unique cards array has " + uniqueCardsObjects.length + " objects.")
console.log("The initial cards array has " + user.length + " objects.")