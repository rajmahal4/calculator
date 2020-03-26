const screen = document.querySelector(".calculator-screen");
const btns = document.querySelectorAll(".number");
const equal = document.querySelector(".equal-sign")
const op = document.querySelectorAll(".operator")
const clr = document.querySelector(".all-clear");
let a;
let b;
let operator;
let toggle = true;
add = (a, b) => a + b;
subtract = (a, b) => a - b;
divide = (a, b) => a / b;
multiply = (a, b) => a * b;

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }

}

function display() {
    let displayValue = '';
    btns.forEach(btn =>
        btn.addEventListener("click", (e) => {
            if(!toggle){
                clear();
            }
                displayValue = screen.textContent;
                screen.textContent += e.target.value;
        }))
}

equal.addEventListener("click", () => {
    let results = Array.from(screen.textContent).join("");
    console.log(Array.from(screen.textContent).join(""));
    if(results.includes("+")){
    let a  = results.split("+")[0];
    let b  = results.split("+")[1];
    operator = "+";
    results = operate(Number(a), Number(b), "+");
    screen.textContent =  operate(Number(a), Number(b), "+");
}
    else if(results.includes("-")){
    let a  = results.split("-")[0];
    let b  = results.split("-")[1];
    operator = "-";
    results = operate(Number(a), Number(b), "-");
    screen.textContent =  operate(Number(a), Number(b), "-");
}
    else if(results.includes("/")){
    let a  = results.split("/")[0];
    let b  = results.split("/")[1];
    operator = "/";
    results = operate(Number(a), Number(b), "/");
    screen.textContent =  operate(Number(a), Number(b), "/");
}
    else if(results.includes("*")){
    let a  = results.split("*")[0];
    let b  = results.split("*")[1];
    operator = "*";
    results = operate(...`${a}`, ...`${b}`, "*");
    screen.textContent =  operate(Number(a), Number(b), "*");
}       
        return results;
})



op.forEach(ops =>{
    ops.addEventListener("click",(e) => {
     operator = e.target.value;
     screen.textContent += operator;
     return operator;
})
})

display();

clr.addEventListener("click", clear);
function clear() {
    let a = 0;
    let b = 0;
    let operator = "";
    screen.innerText = "";
}