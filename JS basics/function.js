/*
    -function is reuseable
    -Block of code that performs specific task
    -can be invoked whenever needed
syntax: 
function functionName(){ // Function Definiton
    //do some work
}
*/

function myFunction(msg) {
    //parameter -> inout
    console.log(msg);
}
myFunction("JS is intresting")// argument

function sum(a, b) {
    // local variables -> scope
    s = a + b;
    return s;
}
let val = sum(323, 43);
console.log("sum of two number is", val);

/*
Arrow Functions - compact way of writing function
syntax: 
const/let functionName =(param1,param2)=>{
    // do some work
}
*/
const arrowSum = (a, b) => {
    console.log(a + b);
}
let arrowMul = (a, b) => {
    m = a * b;
    return m;
}
let mul = arrowMul(34, 87);
console.log("multiplication is", mul);
const printHello = () => {
    console.log("hello");
}

/*
 QS. Create a function using the "function"
 keyword that takes a String as an argument 
 & returns the number of vowels in string
 */
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" ||
            char === "o" || char === "u") {
            count++;
        }
    }
    console.log(count);
}



/*
Higher Order Function/Methods 
- either takes another function as parameter
- or return another function as output
- eg: arr.forEach
syntax:
arr.forEach((callBackFunctioin){
CallbackFunction:Here it is a function to execute 
for each element in the array
-A call back is a function passed as an argument to 
another function
})
*/ 
let arr = ["Pokhara","Kathmandu","Butwal"];
arr.forEach((val,idx,arr) =>{
console.log ("Cities",(val),idx,arr);
})

/*for a given array of numbers,print 
 the squrae of each value using forEach 
 */
let nums=[2,3,5,98];
let calcSquare = (num)=>{
    console.log( "Square is",num*num);
};
nums.forEach(calcSquare);
/*
Map creates a new array with the results of some operation
the value its callback returns are used to form new array
arr.map(callbackFnx)

*/
let numb =[98,78,67];
let newArr= numb.map((val) => {
return val*2
});
console.log(newArr);

function double(input) {
    let result = 2* input
console.log(`input:${input},  2* ${input}= ${result}`);
}
double(9)
 function sum(input1,input2){
    let s = input1 + input2
    console.log( `input1:${input1},  input2:${input2} sum = ${s}`);
 }
 sum(23,5)

 let  arrowDiv = (input1,input2) =>{
    console.log(input1/input2);
 }
 
function diff(input1= 0,input2= 0,input3= 0) {
    let result = input1 - input2 - input3
    console.log(`input1:${input1}, input2:${input2}, input3:${input3} diff = ${result}`);
}
diff(45,19,11)

let arrowDif = (input1,input2,input3) =>{
    console.log(input1 - input2,input3);
}
"2024-01-19T13:01:03.486205+05:45".substring(0,10)

"Exploring Tomorrow :2024-01-19 "
"Career in Web : 2024-01-18 "
"Exploring Tomorrow :2024-01-19 "
"Exploring Tomorrow :2024-01-19 "

let blogs = [
  {
    title:
      "Exploring Tomorrow",
    created_at: "2024-01-19T13:01:03.486205+05:45",
  },
  {
    title:
      "Career in Web ",
    created_at: "2024-01-18T15:02:21.353832+05:45",
  },
  {
    title:
      "Degrees Dying",
    created_at: "2024-01-17T14:06:24.457394+05:45",
  },
  {
    title:
      "Career in Digital Marketing",
    created_at: "2024-01-17T11:02:40.936608+05:45",
  },
];
function blogInfo(index) {
    console.log(
        `${blogs[index].title}: ${blogs[index].created_at.substring(0,10)}`
    );
}
blogInfo(0);
blogInfo(1);
blogInfo(2);
blogInfo(3);

 //console.dir(document.body.childNodes)[1];

//  let firstEl= document.querySelector("#myId") // 1st Element
//  console.dir(firstEl);
// let allEl = document.querySelectorAll(".myClass"); // all Elements
// console.dir(allEl);

 const  element = document.getElementsByClassName("myClass").innerHtml = "in JS";

// console.dir(h2.innerText)
// h2.innerText = h2.innerText + " in JavaScript";

// Create 3 divs with common names -"box" .Access them & add
// some unique text to each other

// let newBtn = document.createElement("button")
// newBtn.innerText = "Click Me!"
// console.log(newBtn);
// let divs = document.querySelectorAll(".box")
// divs.prepend(newBtn);
 let newHeading = document.createElement("h1");// to add a new heading
 newHeading.innerHTML = "<i> Hi, I am New </i>"
 document.querySelector("body").prepend(newHeading)
 let para = document.querySelector("p")
 para.remove();