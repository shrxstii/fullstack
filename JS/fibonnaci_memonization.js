
function fibonacci() {
    let cache = {};

    function fib(n) {
        if (n in cache) {
            console.log("From Cache:", n);
            return cache[n];
        }

        if (n <= 1) {
            return n;
        }

        let result = fib(n - 1) + fib(n - 2);

        cache[n] = result;

        return result;
    }

    return fib;
}

let memoFib = fibonacci();

console.log(memoFib(6));  
console.log(memoFib(7));  
