let num1=15
let num2=3
document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;
//adding 4 functions add, sub, mul, div
let sumEl=document.getElementById("sum-el")

function add(){
   // let result = num1 + num2
    sumEl.textContent = "Result: "+ (num1+num2)
}

function sub(){
    // let result = num1 + num2
     sumEl.textContent = "Result: "+ (num1-num2)
 }
 
function mul(){
    // let result = num1 + num2
     sumEl.textContent = "Result: "+ (num1*num2)
 }
 
function div(){
    // let result = num1 + num2
     sumEl.textContent = "Result: "+ (num1/num2)
 }