// Part 1: Task set from https://javascript.info/variables

// Task 1
let admin, firstName;

firstName = 'John';

admin = firstName;

alert(admin)


// Task 2
let ourPlanet = 'Earth'

let currentUserName = 'John'


// Task 3
const BIRTHDAY = '18.04.1982'; // make birthday uppercase? - known prior to execution, uppercase ok

const AGE = someCode(BIRTHDAY); // make age uppercase? - No, calculated at runtime


// Part 2: Task set from https://javascript.info/function-basics

// Notes:
//
// It’s a good practice to minimize the use of global variables. Modern code has few or no globals. 
// Most variables reside in their functions. Sometimes though, they can be useful to store project-level data.

// Task 1 - Will the function work differently if else is removed
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {    // we can remove this and the function still executes the same
        // ...
        return confirm('Did parents allow you?');
    }
}


// Task 2 - Rewrite it, to perform the same, but without if, in a single line.

// Make two variants of checkAge:

// Using a question mark operator ?
// Using OR ||

function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
}

// More compact way of writing if else statements


// Task 3
// Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function min(a, b) {
    return a < b ? a : b
}

min(2, 5)
min(3, -1)
min(1, 1)


// Task 4
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

function pow(x, n) {
    let result = x;

    for (i = 1; i < n; i++) {
        result *= x;
    }
    console.log(result)
}

pow(3, 2)
pow(3, 3)
pow(1, 100)