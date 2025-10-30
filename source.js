/*
The aim is here to create a function `uniteUnique` that accepts two or more arrays as arguments and return a new array containing unique values from the argument arrays in the order they are first found in the arguments
As an example, [1, 2, 4], [2, 3, 5] would have an output of [1, 2, 4, 3, 5]
The aim is to practice understanding of arguments Object and Rest Parameters
*/

const uniteUnique = (...args) => {
    let newArray = [];
    for (const arg of args) 
        for (const item of arg)  if (!newArray.includes(item)) newArray.push(item);
    return newArray;    
};

// Tests
console.log(uniteUnique([3, 5, 1], [2, 7, 9], [3, 8, 1]));
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));