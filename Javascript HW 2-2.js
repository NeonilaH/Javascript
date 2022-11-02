// 2. Write a script that will output 5 lines to the console in such a way that :) is displayed on the first line, :) :) on the second line, and so on. 
// Console example:
// :)
// :):)
// :) :) :)
// :):):):):)
// :):):):):):)

let b = ""
for (let i = 1; i <= 5; i++)
    console.log(b += ':)')

// 2*. Convert task 2 into a function that takes a string as input, which will be output to the console (as in the smiley condition), as well as the number of lines to output. e.g. `function printSmile(line, numberOfRows)`.

let x = ""
function smile(stroka, numberOfRows) {
    for (let i = 1; i <= numberOfRows; i++) {
        console.log(x += stroka)
    }
}
smile(";)", 4)
