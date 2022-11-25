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

let color ="yellow";
switch(color) {
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
