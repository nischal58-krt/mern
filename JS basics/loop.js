/*
Loop -used to execute a piece of code again & again
for Loop
for(let i = 1; i<=5; i++)
fo(initial Point; condition; mutuator){
    // do somrthing
}
*/
for (let count = 0; count <=8; count++) {
    console.log("Javascript ");
}
console.log("Loop jas ended")

let sum = 0;
let n = 9
for( let i=1; i <=n;i++){
sum = sum + i;
}
console.log(sum);
// While Loop
/*
while (condition){
    // work
    increment
}
do{
    // do some work
} while(condition);
*/
let i = 1;
do{
    console.log("i=",i);
    i++
}while(i <=5)

// For-of loop //Strings,Arrays
let str="HamroCOllege"
let size = 0
for(let val of str){
    // iterator -> characters
    console.log("val=",val);
    size++;
}
console.log("string size=",size);

// for in loop -objects and arrays
// returns keys of objects
let product = {
    name:"Smart Watch",
    version:5,
    launched:"2020",
};
for(let key in product){
    console.log("key=",key ,"value=",product[key] );
}
// Practice Q1 ton print even numbers from 0 to 100
for(let num = 0; num <=10; num++){
    if (num % 2 == 0) { // even number
        console.log("num=",num);
    }
}
for(let number= 0; number <=5 ; number++){
    console.log(number);
}
 let names = ["ram","shyam","hari"]
 for(let index = 0; index<names.length; index++){
    console.log(`index:${index},${names[index]}`);
 }
 for(let num = 1; num<=5;num++){
    console.log(num);
 }
 function findMultiplication(inputNumber,initial,final) {
    for(let count = initial; count <= final;count++)
    console.log(`${inputNumber} *${count} = ${inputNumber*count}`);
 }
 findMultiplication(5,1,6)
 findMultiplication(10,5,8)
 let user1 =
 {
    username:"ram",
    password: "password",

 }
 let user2 =
 {
    username:"ram",
    password: "Password",

 }
 function login(inputuser,inputusername,inputpassword){
    if(inputuser.username === inputusername && inputuser.password===inputpassword ){
        console.log(`${inputuser.username} can login`);
    }else{
        console.log(`${inputuser.username} cannot login`);
    }
    
 }
 login(user1,"Ram","houhdq")


 let users = [
 {
        username:"nischal",
        password:"nish",

    },
 {
        username:"hari",
        password:"har",

    },
    {
        username: "rochak",
        password: "1234",
    }
 ];
 function signIn(inputusername,inputpassword){
    for(let index = 0; index < users.length; index++) {
    if(users.username === inputusername && users.password == inputpassword) {
        console.log("login successful");
        return;
    }else{
    console.log("invalid ");
}
}
 }

  signIn("NISchal","jdh")

 let student = 
    {
        name:"ram",
        paidStaus:true,
        hasScholarship:false,
        fullfillAttendance:false,
    }
    let{paidStaus,hasScholarship,fullfillAttendance} = student // object destructuring
    if((paidStaus || hasScholarship) && fullfillAttendance){
        console.log(`${student.name} can enroll`);
    }else{
        console.log(`${student.name} cannot enroll `);
    }
   

 /*
 Logival operators
 OR || 
 input  output
 0  1      1
 1  0      1
 1  1      1
 - if only one condition is true prints true 
AND &&
input  output
 0  1      0
 1  0      0
 1  1      1
 to print true each and every condition must be true
 */
// const add = (input1,input2, ...numbers)=>{
// console.log(...numbers);
// }
// add(9,8,5,6,7,8)

let countries = [
    {
        "code": "af",
        "name": "Afghanistan",
        "path": "afghanistan"
    },
    {
        "code": "al",
        "name": "Albania",
        "path": "albania"
    },
    {
        "code": "az",
        "name": "Algeria",
        "path": "algeria"
    },
    {
        "code": "zw",
        "name": "Zimbabwe",
        "path": "zimbabwe"
    },
    {
        "code": "np",
        "name": "Nepal",
        "path": "nepal"
    },
]
function findCountryCode(countryName){
    for(let index = 0; index < countries.length; index++){
        const{name,code,path}=countries[index]
    if(name == countryName ||path == countryName ){
        return `${code}`
    }
    }
    return `invalid`
}
console.log(findCountryCode('Nepal'));
// console.log(findCountryCode("Nepal"),newCountry);
/* 
    find the cods of a specific country 
    TODO: 
    create a function findCountryCode 
    - if i pass arguement "Nepal" to the function it should return me np
    - if i pass arguement "zimbabwe" to the function it should return me zw

*/

const shoes = [
    {
        name: "NikeDunkLow",
        modelNo:"NDL-34",
        released:"2024-09-23",
    },
    {
        name: "AdidasSamba",
        modelNo:"ASO-24",
        released:"2014-02-13",
    },
    {
        name: "Puma-RUN",
        modelNo:"PRS-84",
        released:"2018-07-17",
    }
 ]
function findShoeCode(shoeName){
    for(let index = 0; index < shoes.length; index++){
        let shoeFinder = shoes[index]
        if(shoeFinder.name.toLowerCase() == shoeName.toLowerCase() ){
            return shoeFinder.modelNo
        }
    }
    // const normalizedShoeName = ShoeName.toLowerCase();
    // for(let index = 0; index < shoes.length; index++){
    //     const shoeFinder = shoes[index].name.toLowerCase();
    //     if(shoeFinder === normalizedShoeName ){
    //         return shoes[index].modelNo;
    //     }
    // }

        return null;
}
console.log(findShoeCode("adidassamba"));


    const nepaliNames = ["Aarv","Aarya","Aasha","Anisha"]
    for(let i = 0; i< nepaliNames.length; i++){
    console.log(nepaliNames[i]);
    }
    const printElement = (element) =>{
        console.log(element);
    }
    nepaliNames.forEach(printElement)

let numbers = [1,2,3,4];
numbers.forEach((el,idx)=>{
    console.log("element",el,"index",idx);
})
/* 

     callback functions
    - a function passed as an argument to another function
*/
// const showPopup = () =>{
//     console.log("SHOWPOP UP")
// }
// setTimeout(showPopup,2000)// shows popup after 2s // here showpop is call back function
// setTimeout(() =>{ // anynomous function
//     console.log("second pop up");
// },3000);
let todos = [
    {
        title :"html",
        status:true,
    },
    {
        title :"js",
        status:true,
    },
    {
        title :"react",
        status:false,
    }
]
todos.forEach((el) => {
    (el.status) ?
        console.log(`${el.title} is completed`) 
      :console.log(`${el.title} is pending`)
})

 
// 

let numbrs = [1,2,3,4]
let doublenumbers = []
let result = numbrs.forEach((element) =>{
    doublenumbers.push(element * 2)
})
console.log(doublenumbers);
 console.log(result);

 let tripplenumbers = numbrs.map((element)=>{
    return element * 3
 })
 console.log(tripplenumbers);
  
 const nepaliName = ["Aarav","Aasha","Anisha"]
 let dummyusers = nepaliName.map((element,index)=>{
    return {
        name : `${element}`,
        email : `${element}@gmail.com`,
        password : `${element}${index}`,

    }
 })
 console.log(dummyusers);
// find Method 
 let wholeNumbers = [1,2,3,4,5,6,7,8]
 const evenNumbers = wholeNumbers.filter((el) =>{
    return el % 2 == 0;
 })
 console.log(evenNumbers);
 const oddNumbersOld = wholeNumbers.filter((y) =>{
    return y % 2 ;
 })
 console.log(oddNumbersOld);
 const oddNumbers = wholeNumbers.filter((el)  => el % 2 !== 0 )
 console.log("In Single line",oddNumbers);

// console.log(evenNumbers);// usingFilter Method //[2,4,6]
// console.log(oddNumbers); // [1,3,7,]
/* 

    array functions
    array filter
 


const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
*/
// const arr = [5,1,,3,4,2,6]

// const output = arr.map((x)=>
//      x.toString(2)
// )
// console.log(output);
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const results = words.filter((word) => word.length > 6);
console.log(results);


// Reduce Method
const arr = [1,5,8,9,2]
function findSum (arr){
    let sum = 0;
    for (let i = 0; i< arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}
console.log(findSum(arr));

const output = arr.reduce((acc,curr)=>{
    acc = acc + curr
    return acc;
},0)// initial value = 0
console.log("Using reduce",output);

const user =[
    {firstName:"Reba",lastName : "Shrestha",age:37},
    {firstName:"Janet",lastName : "Tamang",age:48},
    {firstName:"Marie",lastName : "Loi",age:33},
    {firstName:"Anna",lastName : "Ching",age:58},
]
const reduceResult = user.filter((acc)=> {
    
})
// const reduceResult = user.reduce((acc)=>{
//     if(acc.age< 40){
//         console.log(acc.firstName);
//     }
// })
// console.log(reduceResult);
// for(let i = 0; i < user.length; i++){
//     if(user[i].age<40){
//        console.log(user[i].firstName);
//     }
   
// }
// console.log(user);

// findAge =(element,user) => {
//     for(let index  = 0; index< user.length; index++){
//         let user[index] = user
//         if(user.age<40){
//             return user.firstName
//         }
//     }
    
// }
// console.log(findAge(user));

// const age = user.reduce((acc,curr)=>{
//     if(curr.age<40){
//         return curr.firstame;
//     }
// },0);
// console.log(age);

 /*
 synchronous code -which runs line by line 
 asynchorous code - donot bloxk other code 
                - runs in the background 
 */
 setTimeout(() => {
    console.log("Hello World");
},2000);
pop