// High School Grader: Create an array of five numeric test scores and write code to calculate and log their average.


let scores = [85, 90, 78, 92, 95];

let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

let average = sum / scores.length;

console.log("Average Score:", average);