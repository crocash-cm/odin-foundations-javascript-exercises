const palindromes = function (string) {
    let parsedString = string.toLowerCase(); 
    parsedString = parsedString.replaceAll(" ", "");
    parsedString = parsedString.replaceAll(".", "");
    parsedString = parsedString.replaceAll(",", "");
    parsedString = parsedString.replaceAll("?", "");
    parsedString = parsedString.replaceAll("-", "");
    parsedString = parsedString.replaceAll("!", "");
    let stringArray = parsedString.split("");
    let reversedArray = stringArray.reverse();
    let reversedString = reversedArray.join("");
    return reversedString === parsedString;
};

console.log(palindromes("A car, a man, a maraca.")); // true
console.log(palindromes('racecar')); // true
console.log(palindromes('tacos')); // false

// Do not edit below this line
module.exports = palindromes;
