const leapYears = function(year) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
};

console.log("Year 2005 (should be false): " + leapYears(2005));
console.log("Year 1800 (should be false): " + leapYears(1800));
console.log("Year 1900 (should be false): " + leapYears(1900));
console.log("Year 1600 (should be true): " + leapYears(1600));
console.log("Year 2000 (should be true): " + leapYears(2000));
console.log("Year 1984 (should be true): " + leapYears(1984));
console.log("Year 2004 (should be true): " + leapYears(2004));

// Do not edit below this line
module.exports = leapYears;
