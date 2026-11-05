
let cache = {};

function factorial(n) {

    if (n in cache) {
        console.log("Fetching from cache...");
        return cache[n];
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let result = n * factorial(n - 1);

    cache[n] = result;

    return result;
}

console.log(factorial(5)); 
console.log(factorial(5)); 
console.log(factorial(6)); 
