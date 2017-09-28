// FUNCTION THAT IS CALLED WHENEVER ANY BUTTON IS CLICK ON CALCULATOR.

var num1, num2 = 0;
// PASS THE INPUT BOX TO JS AS AN OBJ
var numInput = document.getElementById('numInput');
var result = "";
var myOp = ""; // STORE THE OPERATORE (+,-,*, ETC.)
var calcOutput = document.getElementById('calcOutput');

function calculate(op) {
    
    // FIRST, IDENTIFY OP
    if(op !='clear' && op != '=') { // OP IS NOT CLEAR OR EQUAL
        
       myOp = op; // STORE THE OPERATOR (+,-, * ETC.)
        
       num1 = numInput.value; // 1ST NUMBER ENTERED
        
        // OUTPUTS WHAT YOU HAVE TO FAR NUM 1 AND OPERATOR
       calcOutput.innerHTML = `${num1} ${myOp}`; // ES6 JAVASCRIPT
        
       numInput.value = ""; // CLEAR INPUT
        
       } // END IF BLOCK
            else if(op == '=') { // IF EQUAL BUTTON CALLS FUNCTION
           
               num2 = numInput.value; // SECOND NUMBER

               result = eval(num1 + myOp + num2);

               calcOutput.innerHTML = `${num1} ${myOp} ${num2} = ${result}`; //ES6 JAVASCRIPT

               numInput.value = ""; // CLEAR INPUT

    } // END ELSE IF BLOCK
    
        else { // USER CLICKED CLEAR, SO RESET GLOBAL VARS
            numInput.value = "";
            calcOutput.innerHTML = "";
            num1 = 0;
            num2 = 0;
            result = ""
        
    } // END ELSE BLOCK
} // CLOSE FUNCTION CAL(OP)