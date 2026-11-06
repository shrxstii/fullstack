//wap to convert a user entered number into binary and hexadecimal value.


function convertNumber(inputNumber) {
   
    const num = Number(inputNumber);

    if (isNaN(num)) {
        console.log("Please enter a valid number.");
        return;
    }

    const binaryValue = num.toString(2);

    const hexValue = num.toString(16).toUpperCase();

    
    console.log(`Original Number: ${num}`);
    console.log(`Binary Value   : ${binaryValue}`);
    console.log(`Hexadecimal    : ${hexValue}`);
}


const userInput = prompt("Enter a number to convert:");
convertNumber(userInput);
