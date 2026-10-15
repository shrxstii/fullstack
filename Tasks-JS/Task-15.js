// Vowel Counter: Write a function that loops through a string and returns the total count of vowels(a,e,i,o,u) inside it.


function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Shristi"));