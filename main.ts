#! /usr/bin/env node
//shabang
import inquirer from "inquirer";

while (true){

let answer = await inquirer.prompt([
    {message:"Enter first number",name:"num1",type:"number"},
    {message:"Enter first number",name:"num2",type:"number"},
    {message:"your result for",name:"operator",type:"list", choices:["addition","subtraction","Multiplication","Division","Reminder","power"]},

])

if ( answer.operator ==="addition"){
    console.log(answer.num1 + answer.num2);
} else if ( answer.operator ==="subtraction"){
    console.log(answer.num1 - answer.num2);
} else if ( answer.operator ==="Multiplication"){
    console.log(answer.num1 * answer.num2);
} else if ( answer.operator ==="Division"){
    console.log(answer.num1 / answer.num2);
} else if ( answer.operator ==="Reminder"){
    console.log(answer.num1 % answer.num2);
} else if ( answer.operator ==="power"){
    console.log(answer.num1 ** answer.num2);
} else{
    console.log(" Kindly Enter correct Number");
}


let restart = await inquirer.prompt([
    {message:"do you want to calculate another number",type:"confirm",name:"continue"}
])
if (!restart.continue ){
       console.log("Good Bye");
       break
}
}
