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