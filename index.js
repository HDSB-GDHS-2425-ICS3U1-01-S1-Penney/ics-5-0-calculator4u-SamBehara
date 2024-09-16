// Name: Sam Behara
// Date: september 16, 2024
// Title: Calculator App

console.log('Calculator')

let nums = prompt('Are you using more then 2 numbers, Yes or no?')
let num1 = parseInt(prompt('Enter the first value'))
let num2 = parseInt(prompt('Enter the Second value'))
let z = prompt('Enter an operation(+,-,*,/')
let x = 0

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

function dividie(){
    if (num2 == "0") {
       console.log('Cant divide by zero, try again') 
    } else {
        const result = num1 / num2
        console.log(result)   
    }
   
}

if (z == '+') {
  addnumber() 

} if (z == '-') {
   subtract() 

} if (z == '*') {
   Mulply() 

}if(z == '/') {
    dividie()
}


if (nums == ('yes')){
    let num3 = parseInt(prompt('Enter the 3 value'))
    let x = prompt('Enter an operation(+,-,*,/')  
}
else if ((x == '+') && (z == '+')) {
    const answer = num1 + num2 + num3
    console.log('answer')
}
else if ((x == '+') && (z == '-')) {
    const answer = num1 - num2 + num3
    console.log('answer')
}
else if ((x == '+') && (z == '/')) {
    const answer = num1 / num2 + num3
    console.log('answer')
}
else if ((x == '+') && (z == '*')) {
    const answer = num1 * num2 + num3
    console.log('answer')
}
else if ((x == '-') && (z == '+')) {
    const answer = num1 + num2 - num3
    console.log('answer')
}
else if ((x == '-') && (z == '-')) {
    const answer = num1 - num2 - num3
    console.log('answer')
}
else if ((x == '-') && (z == '/')) {
    const answer = num1 / num2 - num3
    console.log('answer')
}
else if ((x == '-') && (z == '*')) {
    const answer = num1 * num2 - num3
    console.log('answer')
}
else if ((x == '/') && (z == '+')) {
    const answer = num1 + num2 / num3
    console.log('answer')
}
else if ((x == '/') && (z == '-')) {
    const answer = num1 - num2 / num3
    console.log('answer')
}
else if ((x == '/') && (z == '/')) {
    const answer = num1 / num2 / num3
    console.log('answer')
}  
else if ((x == '/') && (z == '*')) {
    const answer = num1 * num2 / num3
    console.log('answer')
}
else if ((x == '*') && (z == '+')) {
    const answer = num1 + num2 * num3
    console.log('answer')
}
else if ((x == '*') && (z == '-')) {
    const answer = num1 - num2 * num3
    console.log('answer')
}
else if ((x == '*') && (z == '/')) {
    const answer = num1 / num2 * num3
    console.log('answer')
}
else if ((x == '*') && (z == '*')) {
    const answer = num1 * num2 * num3
    console.log('answer')
}
