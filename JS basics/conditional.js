// IF ELSE STATEMENTS
let numb = 14;
if (numb % 2 === 0) {
       console.log(numb, " is even");
} else {
       console.log(numb, " is odd");
}
// IF ELSE IF ELSE 
let mode = "dark"
let color;
if (mode === "dark") {
       color = "black"
} else if (mode === "blue") {
       color = "blue"
} else if (mode === "green") {
       color = "green"
} else {
       color = "white"
}
console.log("color = ", color);
if (mode === "dark") {
       console.log(mode);
}
/*
Write a code which can give grades to students 
according to their scores 
*/
let score = 0
let grade;
if (score >= 90 && score <= 100) {
       grade = "A"
} else if (score >= 80 && score <= 89) {
       grade = "B"
} else if (score >= 70 && score <= 79) {
       grade = "C"
} else if (score >= 60 && score <= 69) {
       grade = "D"
} else if (score >= 0 && score <= 40) {
       grade = "Just Passed"
}
console.log("According to your score your grade is", grade);


let title = "mern"
let ourCourse = {
       title,
       durrtion: 3,
}
console.log({ title });

let nums = 50
console.log(nums++);
console.log(nums);

let isCold = true;
if (isCold) {
       console.log("wear jacket");
} else {
       console.log("no need");
}

let num1 = 9
let num2 = 2
if (num1 > 2) {
       console.log("Num1 is greater than Num2");
} else {
       console.log("Num2 is greater");
}

let emplyoee1 = {
       name: "ram",
       role: "reception",
}
let emplyoee2 = {
       name: "hari",
       role: "manager",
}
let emplyoee3 = {
       name: "shyam",
       role: "reception",
}
let allowedRole = "manager"
function checkAccessibility(user) {
       console.log("user", user);
       if (user.role == allowedRole) {
              console.log(`${user.name} can access vault `);
       } else {
              console.log(`${user.name} cannot access`);
       }
}
checkAccessibility(emplyoee1)
checkAccessibility(emplyoee2)
checkAccessibility(emplyoee3)

let willRain = false
let hasProbability = false
if (willRain) {
       console.log("You neeed umbrella");
} else {
       if (hasProbability) {
              console.log("might need umbrella");
       }
       else {
              console.log("no need ");
       }
}

let student = {
       name: "ram",
       paidStatus: false,
       hasScholarship: true,
}

if (student.paidStatus) {
       console.log("ram can give exam");
} else if (student.hasScholarship) {
       console.log("ram can still give exam");
} else {
       console.log("ram cannot give exam");
}

function getMonth(val) {
       if (val == 1) {
              console.log("jan");
       } else if (val == 2) {
              console.log("feb");
       } else if (val == 3) {
              console.log("march");
       } else if (val == 4) {
              console.log("april");
       } else if (val == 0) {
              console.log("invalid");
       }
}
getMonth(3)


function getDay(Days) {
       switch (Days) {
              case 1:
                     console.log("Sunday");
                     break;

              case 2:
                     console.log("Monday");
                     break;

              case 3:
                     console.log("Tuesday");
                     break;
              default:
                     console.log("Invalid Week Days");
                     break;
       }

}
getDay(3)
let todos = [
       {
              title: "html",
              status: false,
       },
       {
              title: "Javascript",
              status: true,
       }
]
//  function checkStatus(index) {
for (let index = 0; index < todos.length; index++) {
       if (todos[index].status) {
              console.log(`${todos[index].title} is completed`);
       } else {
              console.log(`${todos[index].title} is pending`);
       }
}


//  checkStatus(0)
//  checkStatus(1)



let mayorCandidate = [
       {
              candidate: "BALEN",
              corrupt: true,
       },
       {
              candidate: "Marc",
              corrupt: false,
       },
       {
              candidate: "Nico",
              corrupt: false,
       }]

showPossibility = (mayor) => {
       if (mayorCandidate[mayor].corrupt) {
              console.log(`${mayorCandidate[mayor].candidate} cannot run again `);
       }
       // else if(mayorCandidate[mayor].corrupt){
       //        console.log(`${mayorCandidate[mayor].secondCandidate} can run for mayor`);
       else {
              console.log(`${mayorCandidate[mayor].candidate} can run for mayor`);
       }
}
showPossibility(0)
showPossibility(2)

// function checkStatus(i) {
//        for (let i = 0; i < todos.length; i++) {
//            if (todos[i].status) {
//                console.log(`${todos[i].title} is completed.`);
//            } else {
//                console.log(`${todos[i].title} is pending.`);