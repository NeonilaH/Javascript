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

// The snail climbs up 7 feet each day and slips back 2 feet each night. How many days will it take the snail to get out of a well with the given depth?
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

/*You are given a program that takes Team 1 and Team 2 football teams goals as inputs accordingly.
Complete the function to take Team 1 and Team 2 goals as arguments and output the final result of the match:
- "Team 1 won", if Team 1's score is higher than Team 2's score
- "Team 2 won", if Team 2's score is higher than Team 1's score
- "Draw", if the scores are equal*/
let goalsTeam1 = 0
let goalsTeam2 = 1
function finalResult(goalsTeam1, goalsTeam2) {
    if (goalsTeam1 > goalsTeam2) {
        console.log("Team 1 won")
    }
    else if (goalsTeam1 < goalsTeam2) {
        console.log("Team 2 won")
    }
    else {
        console.log("Draw")
    }
};

// Alert, Prompt, Confirm
alert("Do you really want to leave this page?");

var user = prompt("Please enter your name");
alert(user);

var result = confirm("Do you really want to leave this page?");
if (result == true) {
    alert("Thanks for visiting");
}
else {
    alert("Thanks for staying with us");
}

// Creating Your Own Objects
function person(name, age, color) {
    this.name = name;
    this.age = age;
    this.favColor = color;
}
var p1 = new person("John", 42, "green");
var p2 = new person("Amy", 21, "red");
document.write(p1.age); 
document.write(p2.name);

/* Bob was hired as an airport information officer and needs to generate status messages for each flight․ Let’s help him!
Complete the given program by fixing the constructor, making a flight object, and assign it to given variable to correctly execute the corresponding message.
Flight ID and the flight status(landed, on time, delayed, etc.) are taken as input.*/
function main() {
    //take flight number and its status
    var flightNumber = readLine();
    var flightStatus = readLine();
        var flight1 = new Flight(flightNumber, flightStatus);
    //assign a flight object to flight1 variable
    //output
    console.log('The flight ' + flight1.number + ' is ' + flight1.status)
    }
function Flight(flightNumber, status) {
    //fix the constructor
    this.number = flightNumber;
    this.status = status;
};

//  Define a method named changeName for our person, which is a function, that takes a parameter name and assigns it to the name property of the object.

function person(name, age) {
    this.name = name;  
    this.age = age;
    this.changeName = function (name) {
        this.name = name;
    }
}

var p = new person("David", 21);
p.changeName("John");

document.write(p.name);

/*A store manager needs a program to set discounts for products.
The program should take the product ID, price and discount as input and output the discounted price. However, the changePrice method, which should calculate the discount, is incomplete. Fix it!*/

function main() {
    var prodID = readLine();
    var price = parseInt(readLine(),10);
    var discount = parseInt(readLine(),10);
    var prod1= new Product(prodID, price);
    console.log(prod1.prodID + " price: " + prod1.price);
    
    prod1.changePrice(discount);
    console.log(prod1.prodID + " new price: " + prod1.price);
}

function Product(prodID, price) {
    this.prodID = prodID;
    this.price = price;
    this.changePrice = function(discount) {
        //your code goes here
        this.price = price - price*discount/100
    }
}

/*Contact Manager
You are working on a Contact Manager app.
You have created the contact object constructor, which has two arguments, name and number.
You need to add a print() method to the object, which will output the contact data to the console in the following format: name: number
The given code declares two objects and calls their print() methods. Complete the code by defining the print() method for the objects.*/
function contact(name, number) {
    this.name = name;
    this.number = number;
    this.print = print
}
function print(){
    console.log(this.name + ': ' + this.number)
}
var a = new contact("David", 12345);
var b = new contact("Amy", 987654321);
a.print();
b.print();

/*The array you are given represents the menu of breakfast options available at the hotel.
The Chef decided to replace one of the options with "Fluffy Pancakes".
Write a program to take the index as input, replace the element with that index with "Fluffy Pancakes", and output the new menu to the console as an array.*/
function main() {
    var breakfasts = ['Cinnamon Doughnuts', 'Waffles', 'Granola', 'Chorizo Burrito', 'French Toast'];
    var index = parseInt(readLine(), 10)
    breakfasts[index] = "Fluffy Pancakes"
    console.log(breakfasts)    
}

// Combining Arrays. JavaScript's concat() method allows you to join arrays and create an entirely new array.
var c1 = ["HTML", "CSS"];
var c2 = ["JS", "C++"];
var courses = c1.concat(c2);
document.write(courses[2]);

/*The player receives points after passing each level of a game.
The program given takes the number of passed levels as input, followed by the points gained for each level, and creates the corresponding array of points.
Complete the program to calculate and output to the console the sum of all gained points.*/

function main() {
    //take the number of passed levels
    var levels = parseInt(readLine(),10);
    var points = new Array();    
    var count = 0;
    while(count<levels){
        var elem = parseInt(readLine(),10);
        points[count] = elem;
        count++;
    }
     var sum = points[0];
    //calculate the sum of points 
    for (i=1;i< points.length ;i++){
        sum = sum + points[i];
    }
    //output
   console.log(sum);
}

// Create a function that returns the century depending on the year given as a parameter.
function main() {
    var year = parseInt(readLine(), 10)    
    //the output
    console.log(calcCent(year));    
}
//complete the function
function calcCent(x){
    return Math.ceil(x/100)
}

// Let's create a program that will ask the user to input a number and alert its square root.
var n = prompt("Enter a number", "");
alert("The square root of " + n + " is " + Math.sqrt(n));


//The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds). It will continue calling the function until clearInterval() is called or the window is closed.
function myAlert() {
    alert("Hi");
}
setInterval(myAlert, 3000);

// Let's create a program that prints the current time to the browser once every second.
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime, 1000);

// The program you are given takes year, month and day as input. Create a function that takes them as arguments and returns the corresponding day of the week.
function main() {
    var year = parseInt(readLine(), 10);
    var month = parseInt(readLine(), 10);
    var day = parseInt(readLine(), 10);
     
    console.log(getWeekDay(year, month, day)); 
 }
 
 function getWeekDay(year, month, day) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var d = new Date(year, month, day);
     //complete the function
    var index = d.getDay()
    return names[index]
 }

// You are working on a Store Manager program, which stores the prices in an array. You need to add functionality to increase the prices by the given amount. The increase variable is taken from user input. You need to increase all the prices in the given array by that amount and output to the console the resulting array.
function main() {
    var increase = parseInt(readLine(), 10);
    var prices = [98.99, 15.2, 20, 1026];
    //your code goes here
    var newArray = prices.map(el => el + increase)
    console.log(newArray)
}

// The following example gets all paragraph elements of the page and changes their content:
<p>hi</p>
<p>hello</p>
<p>hi</p>
<script>
var arr = document.getElementsByTagName("p");
for (var x = 0; x < arr.length; x++) {
  arr[x].innerHTML = "Hi there";
}
</script>

// The script will result in the following HTML:
<p>Hi there</p>
<p>Hi there</p>
<p>Hi there</p>

// select all child nodes of an element and change their content:
function setText() {
    var a = document.getElementById("demo");
     var arr = a.childNodes;
     for(var x=0;x<arr.length;x++) {
       arr[x].innerHTML = "new text";
     }
}
//calling the function with setTimeout to make sure the HTML is loaded
setTimeout(setText, 1000);

// The code above changes the text color and width of the div element.
window.onload = function() {
    var x = document.getElementById("demo");
    x.style.color = '#6600FF';
    x.style.width = '100px';
};

// Create a new text node, and you append it to an existing element
// calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    //creating a new paragraph
    var p = document.createElement("p");
    var node = document.createTextNode("Some new text");
    //adding the text to the paragraph
    p.appendChild(node);

    var div = document.getElementById("demo");
    //adding the paragraph to the div
    div.appendChild(p);
};
