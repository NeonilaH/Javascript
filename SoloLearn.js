let course = 1;
if (course == 1) {
    document.write("<h1>HTML Tutorial</h1>");
} else if (course == 2) {
    document.write("<h1>CSS Tutorial</h1>");
} else {
    document.write("<h1>JavaScript Tutorial</h1>");
}

let score = 1;
if (score >= 88) {
    console.log("excellent");
}
else if (score >= 40 && score <= 87) {
    console.log("good");
}
else {
    console.log("fail");
}

let day = 2;
switch (day) {
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    default:
        document.write("Another day");
}

switch (themeNumber) {
    case 1:
        console.log("Light");
        break;

    case 2:
        console.log("Dark");
        break;

    case 3:
        console.log("Nocturne");
        break;

    case 4:
        console.log("Terminal");
        break;

    case 5:
        console.log("Indigo")
        break;
}

let color = "yellow";
switch (color) {
    case "blue":
        document.write("This is blue.");
        break;
    case "red":
        document.write("This is red.");
        break;
    case "green":
        document.write("This is green.");
        break;
    case "orange":
        document.write("This is orange.");
        break;
    default:
        document.write("Color not found.");
}

// a for loop that prints numbers 1 through 5:

for (i = 1; i <= 5; i++) {
    document.write(i + "<br />");
}

for (i = 1; i <= 5; i++) {
    document.write(i);
}

var i = 1;
for (; i <= 5; i++) {
    document.write(i + "<br />");
}

for (i = 1, text = ""; i <= 5; i++) {
    text = i;
    document.write(i + "<br />");
}

// Fill in the blanks to print EVEN values from 0 to 20 using a for loop:
var x = 0;
for (; x <= 20; x += 2) {
    document.write(x);
}

var i = 0;
while (i <= 10) {
    document.write(i + "<br />");
    i++;
}

// Write a program-timer, that will take the count of seconds as input and output to the console all the seconds until timer stops.
function main() {
    var seconds = parseInt(readLine(), 10)
    // Your code here
    while (seconds >= 0) {
        console.log(seconds);
        seconds--
    }
}

// do..while loop will execute the code block once, before checking if the condition is true, and then it will repeat the loop as long as the condition is true.
var i = 20;
do {
    document.write(i + "<br />");
    i++;
}
while (i <= 25);

// break - we use it to "jump out" of a loop and continue executing the code after the loop.
// continue - breaks only one iteration in the loop, and continues with the next iteration.
for (i = 0; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    document.write(i + "<br />");
}

for (i = 0; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    document.write(i + "<br />");
}

// Many tall buildings, including hotels, skip the number 13 when numbering floors -- often going from floor 12 to floor 14. It is thought that the number 13 is unlucky. Write a program that will number 15 rooms starting from 1, skipping the number 13. Output to the console each room number in separate line.
var countOfRooms = 15;
for (i = 1; i <= 16; i++) {
    if (i == 13) {
        continue;
    }
    console.log(i)
}

//The snail climbs up 7 feet each day and slips back 2 feet each night. How many days will it take the snail to get out of a well with the given depth?
function main() {
    var depth = parseInt(readLine(), 10);

    for (i = 0; depth > 0; i++) {
        depth -= 7
        if (depth > 0) {
            depth += 2
        }
    }
    console.log(i);
}

// Sometimes it’s very useful to set reminder to help you accomplish all of your tasks. The program you are given takes an event as input. Complete the function-reminder to take that event as argument and output the corresponding message.
function setReminder(event) {
    console.log("You set a reminder about " + event)
};
