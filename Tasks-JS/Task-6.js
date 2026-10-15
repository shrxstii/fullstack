// Factorial Calculator : Use a while loop to calculate and print the factorial of a given number n (eg:, 5 becomes 120).

let n = 5;
let factorial = 1;
let i = 1;

while (i <= n) {
    factorial = factorial * i;
    i++;
}

console.log(factorial);