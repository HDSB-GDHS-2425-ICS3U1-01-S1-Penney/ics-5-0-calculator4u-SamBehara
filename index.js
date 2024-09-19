// Name: Sam Behara
// Date: september 16, 2024
// Title: Calculator App

console.log('Calculator')

//asking for user input for numbers and opperator being used
let nums = prompt('Are you using more then 2 numbers, yes or no?')
let num1 = parseInt(prompt('Enter the first value'))
let opperator1 = prompt('Enter an operation(+,-,*,/')
let num2 = parseInt(prompt('Enter the Second value'))

//declaring varables for later
let opperator2 = 0
let num3;

//the function for two numbers in the calculator
function addnumber(){
    const result = num1 + num2
    console.log(result)
}

function subtract(){
    const result = num1 - num2
    console.log(result)
}

function Mulply(){
    const result = num1 * num2
    console.log(result)
}

//making sure that divivding by zero can't be done
function dividie(){
    if (num2 == "0") {
       console.log('Cant divide by zero, try again') 
    } else {
        const result = num1 / num2
        console.log(result)   
    }
   }

// stoping the other code if your using more then two numbers so that two answer don't show
if(nums=='yes'){
}
else if (opperator1 == '+')  {
  addnumber() 

} else if (opperator1 == '-')  {
   subtract() 

} else if (opperator1 == '*')  {
   Mulply() 

}else if (opperator1 == '/')  {
    dividie()
}

// if your using 3 numbers ask the user to input the other numbers and opperation
if (nums == 'yes'){
    opperator2 = prompt('Enter an operation(+,-,*,/')  
     num3 = parseInt(prompt('Enter the 3 value'))
}


// checking what the opperation are for the answer 
 if ((opperator2 == '+') && (opperator1 == '+')) {
    const answer = num1 + num2 + num3
    console.log(answer)
}
else if ((opperator2 == '+') && (opperator1 == '-')) {
    const answer = num1 - num2 + num3
    console.log(answer)
}
else if ((opperator2 == '+') && (opperator1 == '/')) {
    const answer = num1 / num2 + num3
    console.log(answer)
}
else if ((opperator2 == '+') && (opperator1 == '*')) {
    const answer = num1 * num2 + num3
    console.log(answer)
}
else if ((opperator2 == '-') && (opperator1 == '+')) {
    const answer = num1 + num2 - num3
    console.log(answer)
}
else if ((opperator2 == '-') && (opperator1 == '-')) {
    const answer = num1 - num2 - num3
    console.log(answer)
}
else if ((opperator2 == '-') && (opperator1 == '/')) {
    const answer = num1 / num2 - num3
    console.log(answer)
}
else if ((opperator2 == '-') && (opperator1 == '*')) {
    const answer = num1 * num2 - num3
    console.log(answer)
}
else if ((opperator2 == '/') && (opperator1 == '+')) {
    const answer = num1 + num2 / num3
    console.log(answer)
}
else if ((opperator2 == '/') && (opperator1 == '-')) {
    const answer = num1 - num2 / num3
    console.log(answer)
}
else if ((opperator2 == '/') && (opperator1 == '/')) {
    const answer = num1 / num2 / num3
    console.log(answer)
}  
else if ((opperator2 == '/') && (opperator1 == '*')) {
    const answer = num1 * num2 / num3
    console.log(answer)
}
else if ((opperator2 == '*') && (opperator1 == '+')) {
    const answer = num1 + num2 * num3
    console.log(answer)
}
else if ((opperator2 == '*') && (opperator1 == '-')) {
    const answer = num1 - num2 * num3
    console.log(answer)
}
else if ((opperator2 == '*') && (opperator1 == '/')) {
    const answer = num1 / num2 * num3
    console.log(answer)
}
else if ((opperator2 == '*') && (opperator1 == '*')) {
    const answer = num1 * num2 * num3
    console.log(answer)
}
