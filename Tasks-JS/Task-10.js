//Even Number Filter: Use the .filter() method on an array of numbers to create a new array containing only the even values.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers);