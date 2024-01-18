// IF ELSE STATEMENTS
let numb= 14;
if(numb%2 ===0){
       console.log(numb," is even");
}else{
       console.log(numb," is odd");
}
// IF ELSE IF ELSE 
let mode = "dark"
let color;
if(mode === "dark"){
       color ="black"
}else if (mode === "blue"){
       color = "blue"
}else if (mode === "green"){
       color = "green"
} else {
       color = "white"
}
console.log("color = ",color);
if(mode === "dark") {
       console.log(mode);
}
 /*
 Write a code which can give grades to students 
 according to their scores 
 */
let score = prompt("Enter your score");
let grade;
if(score >=90 && score <=100){
    grade = "A"
}else if(score >=80 && score<=89){
    grade = "B"
}else if(score >=70 && score<=79){
    grade = "C"
}else if(score >=60 && score<=69){
    grade = "D"
}else if(score >=0 && score <=40){
    grade = "Just Passed"
}
console.log("According to your score your grade is",grade);                                                                                                                                                                                                                                                                                                                                                                         