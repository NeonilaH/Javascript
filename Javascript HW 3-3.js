// Task 2*** Implement reading JSON from task2.json file using, for example, the fs module. for further use in the function described in the assignment
         // Task 2*
         // An array of objects is given. Each object is an identification card of a person. We only need to store unique values in this array. Implement a function that will do the job.

const fs = require('fs');
const user = JSON.parse(fs.readFileSync("HW 3 data/task2.json"))

const uniqueCardsObjects = Array.from(new Set(user.map(JSON.stringify))).map(JSON.parse)

console.log(uniqueCardsObjects)
console.log("The unique cards array has " + uniqueCardsObjects.length + " objects.")
console.log("The initial cards array has " + user.length + " objects.")
