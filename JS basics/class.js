let loge = [
    {
        name: 'brad',
        age: 30,
        married: true,
    },
    {
        name: 'dylan',
        age: 38,
        married: true,
    },
    {
        name: 'hyary',
        age: 40,
        married: false,
    }
]
console.log('%c My Details', 'color:orange; font-weight = bold');
// console.log({ loge });
console.table(loge)

for (let index = 0; index < loge.length; index++) {
    if (loge[index].married) {
        console.log(`${loge[index].name} who is ${loge[index].age} is married`);
    } else {
        console.log(`${loge[index].name} who is ${loge[index].age} is not  married`)
    }
}

function sum(...rest) {
    let result = 0;
    console.log("rest", rest);
    for (let index = 0; index < rest.length; index++) {
        result = result + rest[index];
    }
    return result;
}
console.log(sum(1, 2, 9));
/* Hoisting => In arrowfunction function can be called 
or used only after declaring the function 

*/

function doubleTheArray(arr) {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        result.push(arr[index] * 2);
    }
    return result
}
console.log("Doubling the array", doubleTheArray([4, 5, 9]));
// .push
let sports = ["basketball", "football", "volleyball"]
let newSport = sports.push("wrestling", "Cricket");
console.log(sports);
// .slice
const myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed = myFish.splice(3, 1);
console.log(myFish);
//myFish is ["angel", "clown", "drum", "sturgeon"]
//removed is ["mandarin"]
let tasks = [];
function addtask(task) {
    tasks.push(task)
}
addtask("learn JS");
console.log(tasks);

calculateArea = (radius) => {
    return (Math.PI * radius * radius)
}
console.log(Math.PI);
console.log("Area of Circle is ", calculateArea(3));


// for (let num = 0; num < 10; num++) {
//     if (num % 2 === 0) {
//         console.log("Even numbers are ", num);
//     }
// }
// isEven = (numb) => {
//     if (numb % 2 == 0) {
//         return true;
//     }
//     else {
//         false;
//     }
// }
// console.log(isEven(8));

printSquare = (numb) => {
    return (numb * numb);
}
console.log(printSquare(8));
//Write a function called countVowels that takes a
//string as an argument and returns the
// count of vowels (a, e, i, o, u) in the string.
const countVowels = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e'
            || str[i].toLowerCase() === 'i' ||
            str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
            count++;
        }
    }
    return count;
};

console.log(countVowels("Apple")); // Output: 2

console.log(countVowels("Orange"));
/*
Write a function called getGrade that takes a 
numerical grade as an argument and returns 
the corresponding letter grade based on the
 following grading scale:

A: 90-100
B: 80-89
C: 70-79
D: 60-69
F: 0-59
*/

const getGrade = (grade) => {
    if (grade >= 90 && grade <= 100) {
        return 'A'
    } else if (grade >= 80 && grade < 90) {
        return 'B';
    } else if (grade >= 70 && grade < 80) {
        return 'C';
    } else if (grade >= 60 && grade < 70) {
        return 'D';
    } else {
        return 'F';
    }
}
console.log("Your grade is ", getGrade(82));

// product = (...num) =>{
//     let final = 0;
//     for(let i = 0; i < num.length; i++){
//         final = final * num[i];
//     }
//     return final;
// }
//  console.log("product is ",product(8,9,2));
let todos = [
    {
        title: "variable",
        status: "completed",
        createAt: "2024-01-03"
    },
    {
        title: "array",
        status: "completed",
        createAt: "2024-01-05"
    },
    {
        title: "object",
        status: "pending",
        createAt: "2024-01-07"
    },
    {
        title: "loop",
        status: "pending",
        createAt: "2024-01-09"
    },
    {
        title: "function",
        status: "completed",
        createAt: "2024-01-10"
    },
];
let completedTodods = []
let pendingTodods = []
for (let index = 0; index < todos.length; index++) {
    let ourtodo = todos[index]
    if (ourtodo.status === "completed") {
        completedTodods.push(ourtodo)
    } else {
        pendingTodods.push(ourtodo)
    }
}
console.log(todos)
console.log({ "Completed TODOS": completedTodods });
console.log(pendingTodods);







