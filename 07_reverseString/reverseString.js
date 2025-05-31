const reverseString = function(string) {
    let tempArr = [];
    let reversedString = "";
    for (const char of string) {
        tempArr.unshift(char);
    }
    for (const char of tempArr) {
        reversedString += char;
    }
    return reversedString;
};

let string = "hey";
console.log(reverseString(string));
// Do not edit below this line
module.exports = reverseString;
