const sumAll = function(x, y) {
    let sum = 0;
    if (Number.isInteger(x) == false || Number.isInteger(y) == false) {
        return "ERROR";
    }
    if (x < 0 || y < 0) {
        return "ERROR";
    }
    if (x < y) {
        for (let i = x; i <= y; i++) {
            sum = sum + i;
        }
        return sum;
    }
    else if (x > y) {
        for (let i = y; i <= x; i++) {
            sum = sum + i;
        }
        return sum;
    }
    else {
        return 0;
    }
    
};

console.log("First test, x: 1, y: 4: ");
console.log(sumAll(1, 4));
console.log("Second test: x: 4, y: 1");
console.log(sumAll(4, 1));
console.log("Third test, x:1, y:505930");
console.log(sumAll(1, 505930));
console.log("Fourth test: x: 505930, y: 1");
console.log(sumAll(505930, 1));
console.log("Fifth test: negative x");
console.log(sumAll(-1, 2));
console.log("Sixth test: negative y");
console.log(sumAll(2, -1));
console.log("Sevent test: non-integer x");
console.log(sumAll("test", 12));
console.log("Eighth test: non-integer y");
console.log(sumAll(1, "test"));

// Do not edit below this line
module.exports = sumAll;
