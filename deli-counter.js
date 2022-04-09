// 1. Write your functions here
//Modified
const katzDeli = [];
const takeANumber = function(katzDeli, name) {
    // Here we are passing in two arguments as variables: (katzDeli, name).
    katzDeli.push(`${name}`); 
    //We are pushing the variable "name" that will be passed in the variable katzDeli as an array.
    let message = (`Welcome, ${name}. You are number ${katzDeli.length} in line.`); 
    /*We are also pushing the message to be retuned with the variable "name" that was passed in.
    In addition, we are also pushing the length of the array assigned to katzDeli. 
    In this case, each name passed in represents an element within the array assigned to katzDeli.
    katzDeli empty should represent 0 index and each name variable passed in would increment. 
    At first, a loop was in mind, however, since an input would initiate the count a loop is not needed here.
    */
    return message;
}

const nowServing = function(katzDeli) {
    let i = 0;
    while (i < katzDeli.length) {
        i++; 
    }
    if (katzDeli.length === 0) {
        return "There is nobody waiting to be served!";
    }else {
        return `Currently serving ${katzDeli.shift()}.`;
        }
}

const inLine = [];
const line = function (katzDeli) {
    for (let i = 0; i < katzDeli.length; i++) {
        inLine.push(` ` + [i+1] + `. ` + katzDeli[i]);
    }
    if (katzDeli.length === 0) {
        return "The line is currently empty.";
    } else {
        return (`The line is currently: ` + inLine)
    }
}   


// console.log(takeANumber(katzDeli, "Ada"));
// console.log(takeANumber(katzDeli, "Grace"));
// console.log(takeANumber(katzDeli, "Kent"));
// console.log(line(katzDeli));
// console.log(nowServing(katzDeli));
// console.log(line(katzDeli));
// console.log(takeANumber(katzDeli, "Matz"));
// console.log(line(katzDeli));
// console.log(nowServing(katzDeli));
// console.log(line(katzDeli));

// 2. Example Usage
// const katzDeli = []
// takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
// takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
// takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

// nowServing(katzDeli) //=> "Currently serving Ada."

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

// takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

// line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

// nowServing(katzDeli) //=> "Currently serving Grace."

// line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"