const fibonacci = function(n) {
    if (n < 0)
    {
        return "OOPS";
    }
    if (n == 0)
    {
        return 0;
    }
    if (n == 1) 
    {
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};


console.log(fibonacci(4)); // returns 3
console.log(fibonacci(6)); // returns 8

// Do not edit below this line
module.exports = fibonacci;
