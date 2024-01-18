/*
    -Block of code that performs specific task
    -can be invoked whenever needed
syntax: 
function functionName(){ // Function Definiton
    //do some work
}
 Function call
 functionName();
double(2) 2*2 = 4
double (6) 6*2 =12
*/

function myFunction(msg) {
    //parameter -> inout
    console.log(msg);
}
myFunction("JS is intresting");// argument
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