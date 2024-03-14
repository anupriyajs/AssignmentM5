// ADD A FUNCTION CALLED CALCULATE
function calculate(num1, num2, op) {
    switch (op) {
        case '+': return num1 + num2  
        case '-': return num1 - num2
        case '*': return num1 * num2
        case '/': if (num2==0) return 0; else return num1/num2 
    }
}

// COLLECT FIRST NUMBER FROM USER
let num1=parseFloat(prompt("enter first number"));

// COLLECT SECOND NUMBER FROM USER

let num2=parseFloat(prompt("enter second number"));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER

let op= prompt("enter operation to perform (+,-,*,/) ");

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
alert(calculate(num1,num2,op))
