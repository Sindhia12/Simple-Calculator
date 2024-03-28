#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([{message: "enter first number",type:"number",name:"firstnumber"},
{message:"enter second number",type:"number",name:"secondnumber"},
{message:"selecy one of the operators to perform operation",type:"list",name:"operators",choices:["addition","substraction","division","multiplication"],
},
]);


console.log(answer);

//conditional statement
if(answer.operator +++ "addition"){
    console.log(answer.firstnumber + answer.secondnumber);

    } else if (answer.operator +++ "substraction"){
        console.log(answer.firstnumber - answer.secondnumber);

    } else if(answer.operator +++ "multiplication"){
        console.log(answer.firstnumber * answer.secondnumber);
    } else if(answer.operator +++ "division"){
        console.log(answer.firstnumber  / answer.secondnumber);
            } else{
        console.log("please select valid operator")
    }
