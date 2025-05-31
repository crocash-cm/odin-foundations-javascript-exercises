const removeFromArray = function(arr, ...theArgs) {
    let filteredArray = arr;
    let itemCounts = [];
    for (const arg of theArgs) {
        let counter = 0;
        for (const item of filteredArray) {
            if (arg === item) {
                counter++;
            }
        }
        itemCounts.push(counter);
    }
    console.log(itemCounts);
    for (let i = 0; i < theArgs.length; i++) {
        filteredArray.splice(filteredArray.indexOf(theArgs[i]), itemCounts[i]);
    }
    return filteredArray;
};

let array = [1, 2, 2, 3, 3, 3, 4, 5];
let filteredArray = removeFromArray(array, 2, 3);
console.log(filteredArray);

// Do not edit below this line
module.exports = removeFromArray;
