//Traffic Light Simulator in JavaScript, using `if...else` statements to control whether traffic should stop, slow down, or go based on the light color variable, in the same simple format as Task 2.



let lightColor = "red";

if (lightColor === "red") {
    console.log("Stop");
} else if (lightColor === "yellow") {
    console.log("Slow down");
} else if (lightColor === "green") {
    console.log("Go");
} else {
    console.log("Invalid traffic light color");
}
