/*
The aim is here to create a function `uniteUnique` that accepts two or more arrays as arguments and return a new array containing unique values from the argument arrays in the order they are first found in the arguments
As an example, [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5]
*/

const uniteUnique = (...args) => {
    for (const arg of args) {
        console.log(arg);
    }
};

console.log(uniteUnique([3, 5, 1], [2, 7, 9], [3, 8, 1]));