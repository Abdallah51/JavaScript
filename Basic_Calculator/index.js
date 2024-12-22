let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
function add(){
    sum = num1 + num2
    document.getElementById("sum-el").textContent = "sum= " + sum
}
function subtract(){
    sub = num1 - num2
    document.getElementById("sum-el").textContent = "subtract= " + sub
}
function divide(){
    div = num1 / num2
    document.getElementById("sum-el").textContent = "divide= " + div
}
function multiply(){
    mul = num1 * num2
    document.getElementById("sum-el").textContent = "multiply= " + mul
}
