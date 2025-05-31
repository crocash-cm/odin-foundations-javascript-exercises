const repeatString = function(string, numTimes) {
    let repeatedString = [];
    if (numTimes < 0) {
        return "ERROR";
    }
    if (numTimes == 0) {
        return "";
    }
    for (let i = 0; i < numTimes; i++)
    {
        repeatedString += string;
    }
    return repeatedString;
};

string = "hey";
console.log(repeatString(string, 3));

// Do not edit below this line
module.exports = repeatString;
