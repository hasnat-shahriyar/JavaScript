// Non-Primitive/Reference Data Types:

// Object: Represents a collection of key-value pairs where keys are strings (or Symbols) and values can be of any data type, including other objects. 
// For example:
let person = {
    name: 'Hasnat',
    age: 24,
    isStudent: true,
};

// Array: Represents a collection of elements, which can be of any data type and accessed by an index. 
// For example:
let numbers = [1, 2, 3, 4, 5];
let fruits = ['apple', 'banana', 'orange'];

// Function: Represents a block of code that can be called and executed. Functions can also be assigned to variables and passed as arguments to other functions. 
// For example:
function greet(name) {
    return 'Hello, ' + name + '!';
}


// Date: Represents a specific moment in time. It is used for working with dates and times. 
// For example:
let currentDate = new Date();


// RegExp: Represents a regular expression, used for pattern matching within strings. 
// For example:
let pattern = /hello/i;


// Example:
function modifyObject(obj) {
    obj.prop = "poriborton";
}

let myObject = { prop: "ashol" };
modifyObject(myObject);
console.log(myObject.prop);