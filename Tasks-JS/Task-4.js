// FizzBuzz Basic: Print "Fuzz" if a number is divisible by 3, "Buzz" if by 5, "FizzBuzz" if by both , or the number itself if none.


let num = 15;

if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
} else if (num % 3 === 0) {
    console.log("Fizz");
} else if (num % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(num);
}