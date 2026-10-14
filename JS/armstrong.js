let n = 153;
let temp = n;
let sum = 0;
let digits = n.toString().length;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** digits;
    temp = Math.floor(temp / 10);
}

if (sum === n) {
    console.log("Armstrong Number");
} else {
    console.log("Not an Armstrong Number");
}