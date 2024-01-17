// alert("js connnected");
// copy line bellow alt+shift+downarrow
// multi line cursor alt+ shift+ i

// console.log("javascript-connected");

console.log("Namaste ram")
console.log("Namaste shyam")
console.log("Namaste buag")
console.log("Namaste hari")

greetingText = "namaste"
console.log("namaste")
console.log(greetingText)
age = 20
kycVerified = true
console.log("age", age);
console.log("kycverified", kycVerified);

firstName = "Hari"
middleName = "bdr"
fullName = firstName + middleName
console.log("fullname",fullName);

marriedStatus = false
console.log("marriedStatus",marriedStatus);
/* 
       data types 
        striing = text always in "" or ''
        integer(whole number) / float(decimal)= number
        Boolean = true/false
        duration_in_hour = 1 // snake case // python
        durationInHour = 3 // Camel case // javascript 
        null // empty 
        undefined // js only
 */
num1 = 105;
num2 = 99;
sum = num1 + num2
console.log("sum = ",sum);
// console.log("sum of  "+ num1 + "   and " + num2  + "  " is " + sum);
console.log("sum of  "+ num1 + " and " + num2+" is "+sum );

// research template literal 
 var brand =  "samsung" 
let  website =  "htpps://www.samsung.com"
const PI = 3.145
const GOLDEN_RATIO  = 1.6 
const_EARTH_DIRECTION = "west-east"

let num3 = 126 
let num4 = 26
product = num3 * num4 
console.log("product of " + num3 + " and " + num4 + " is "+product);

const userName = 'Marie'
const balance = 10

// Using regular string
const str1 = 'Hi ' + userName + ',' + ' your balance is ' + balance + '.'
console.log("Regular string: ", str1)

// Using template literal
const str2 = `Hi ${userName}, your balance is ${balance}.`
console.log("Template literal: ", str2)

let products = ["watch", "mouse","keyboard"];
console.log("products",products);

 let colors = ["rd","yellow","blue"];
  const index = 0;
  const newValue = "red"
  colors[0] = newValue;
 console.log("colors",colors);
//  console.log("colors -0th index", colors[0] );
//  colors = "red"


let fruits = ["orange","apple","banana","Pineapple"]
console.log("fruits",fruits);

let evenNumbers = ["2","4","6","8"]
let oddNumbers = [1,3,5,9]
console.log("Evennumbers",evenNumbers);
console.log("Oddnumbers",oddNumbers);

let oddNumber = [1,3,5, "seven",9]
console.log("4th index",oddNumber[3]);
oddNumber[3] = 7
console.log(oddNumber);

let courses = ["MERN","QA","python"]
console.log("0th index",courses[0]);
console.log("1st index",courses[1]);
console.log("2nd index",courses[2]);
console.log("3rd index",courses[3]);
courses[3] = "Marketting"
courses[0] = "Mern Stack"
courses[1] = "Quality Assurance"
courses[2] = "pythonJ"
console.log(courses);

 /* change course title form mern to Mern-Stack

/*
Array = collections
       - index // always starts with 0
       - collection of different values
       - usually collection of similar data types
let <arrayName> = [<element1>,<element2>,<element3>]
eg:
 -let fruits = ["orange","apple","banana","Pineapple"]
*/
/*
     Object 
     - same like real life objects
     Syntax = 
     let <variable> = {
       <key> : <value>,
       <attribute> : <value>,
       <property> : <value>,
     }
*/
let projector = {
       color : "white",
       brand : "Sony",
       price : 50000
}
console.log(projector);

 let businesses = ["manufacturing","investing","finance"]
 businesses[0] = "tech"
 console.log("businesses",businesses);

 let ourBusiness = {
              idustry : "fintech",
              turnover : "150 Million$",
              founded : 2025,
              YOY : "350 times",
       profitable : true,
 }
 console.log(ourBusiness);

 let ourCourses = {
       courseTitle : "Mern",
       courseDuration : "3 Months",
       startTime : 4,
       endTime : 5 ,
       status : true,
 }
//  Bracket Notation
 ourCourses['courseTitle'] = 'MernStack'
 ourCourses['courseDuration'] = '6 Months'

//  For Each Method 
 Object.keys(ourCourses).forEach(key =>{
       if (key === 'courseTitle'){
              ourCourses[key] = 'Python'
       }
 })
 console.log("courses details",ourCourses);
 

  const profile = {
       username : "nischal ghising",
       follower : 345,
       isFollow : true,
       following : 34,
  }
  profile["username"] = "Dorje"
  console.log("Profile Details",profile);

let myWatch = {
       brand :"Apple",
       model : 5,
       type : "digital",
       "price" : "1500$",
}
myWatch.price = "hundred"
myWatch["brand"] = 'Samsung'
console.log(myWatch);


  
  let game="Europe"
  game = {
       zone :"Football",
         trophies1: {
                league: "Premier League",
                country: "England",
                started: 1819,
         },
         trophies2:{
              league2 :"Bundesliga",
              country: "Germany",
              started : 1898
         },
       
  }
  game.trophies2.country= "HUngary"
  console.log(`${game.zone} is from ${game.trophies2.country}`);
  let users = ["ram","shyam","hari"]; // users = ["ram",9823,] //wrong
  let userOne = {
       name:"ram",
       phone :9832,
  };
  let userTwo ={
       name : "sita",
       phone:9880,
  }
  users = [userOne,userTwo];
  console.log("users",users); // we need detail info of multiple users
// topics[course1,course2]; // instead of this we can directly
// create like this 

let userData = [
       {
       name : "ram",
       ncell : 9834, // incase of less data
       ntc: 9824,
       contacts : [
              {
                     number : 98156743,
                     serviceProvider : "NTC"
              },
              {
                     number : 988934,
                     serviceProvider : "Ncell"
              },
       ]

},
       {
       name : "sita",
       contacts : [
              {
                     number : 97763,
                     serviceProvider : "jio",
              },
              {
                     number : 988934,
                     serviceProvider : "airtell",
              },
       ]
       }
]
userData[0].contacts[1].serviceProvider = "Vodafone"
userData[1].contacts[1].serviceProvider = "Vodafone"

userData[0].contacts[0].number = "45322"
userData[1].contacts[0].number = "0987"

console.log("SIM Users",userData);
// classes 1-a,b, 2-a,b-3,

const classes =[
      {
       class: "one",
       sections: [
              {
                     section:"A",
                     numberOfStudent : 50,
                     classTeacher : "bun",
              },
             
             {
              section: "B",
              numberOfStudent : 98,
              classTeacher:"xyz",
             } 
       ]
      },
      {
       class: "two",
       sections: [
              {
                     section:"A",
                     numberOfStudent : 40,
                     classTeacher : "jon",
              },
             
             {
              section: "B",
              numberOfStudent : 48,
              classTeacher:"rz",
             } 
       ]
      },
      {
       class: "three",
       sections: [
              {
                     section:"A",
                     numberOfStudent : 40,
                     classTeacher : "bhu",
              },
             
             {
              section: "B",
              numberOfStudent : 28,
              classTeacher:"xmo",
             } 
       ]
      },
]
console.log(classes);
classes[1].sections[1].classTeacher="Ram"
console.log(`${classes[2].sections[1].classTeacher} is class teacher of ${classes[2].class} ${classes[2].sections[1].section}`);
let todos = [
       {
              title : "array",
              status : "completed",
              createdAt : "2024-01-05",
       },
       {
              title : "HTML",
              status : "completed",
              createdAt : "2023-12-09"
       },
       {
              title : "Object",
              status : "completed",
              createdAt : "2024-01-09",
       },
              
       {
              title : "loop",
              status : "pending",
              createdAt : "2024-05=6",
       },
]
console.log(todos);