const getTheTitles = function(booksArray) {
    let titlesArray = [];
    booksArray.forEach(element => {
        titlesArray.push(element.title);
    });
    return titlesArray;
};

let testArray = [
    {
        title: "book1",
        author: "name1"
    },
    {
        title: "book2",
        author: "name2"
    }
];

console.log(getTheTitles(testArray));

// Do not edit below this line
module.exports = getTheTitles;
