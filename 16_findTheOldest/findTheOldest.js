const findTheOldest = function(peopleArray) {
    let greatestAge = 0;
    let eldestPerson = {};
    let age = 0;
    peopleArray.forEach(person => {
        if (person.yearOfDeath == undefined)
        {
            let date = new Date ();
            let currentYear = date.getFullYear();
            age = currentYear - person.yearOfBirth;
        }
        else
        {
            age = person.yearOfDeath - person.yearOfBirth;
        }
        if (age > greatestAge)
        {
            greatestAge = age;
            eldestPerson = person;
        }
    });
    return eldestPerson;
};


const people = [
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

const people1 = [
    {
    name: "Carly",
    yearOfBirth: 2018,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]


const people2 = [
    {
    name: "Carly",
    yearOfBirth: 1066,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

console.log(people2[0].yearOfDeath);
console.log(findTheOldest(people).name);
console.log(findTheOldest(people1).name);
console.log(findTheOldest(people2).name);
// Do not edit below this line
module.exports = findTheOldest;
