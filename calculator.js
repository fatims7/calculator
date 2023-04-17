const buttons = document.querySelectorAll(".button");
const displayInput = document.querySelector("#displayNumber");
const displayResult = document.querySelector("#displayResult");


let input = "";
let haveDot = null;


function clearCalculator () {
    input = "";
    result = "";
    displayInput.innerText = input;
    displayResult.innerText = result;
    haveDot = null;
}

function inputDigit(digit) {
    if (input === "0") {
        input = digit;
    } else {
        input += digit;
        result = eval(input);
    }
}


function calculationHistory() {

    const history = {
        inputCalc: input,
        resultCalc: result
    }

    putHistory(history);
    renderHistory();
}


for (let button of buttons) {
    button.addEventListener('click', (e) => {
        const target = e.target;

        if(target.innerText === "." && !haveDot) {
            haveDot = true;
        } else if(target.innerText === "." && haveDot) {
            return;
        }

        if(target.classList.contains('clear')) {
            clearCalculator();
            return;
        }

        if(target.classList.contains('negative')) {
            input = input * -1;
            displayInput.innerText = input;
            return;
        }

        if(target.classList.contains('delete')) {
            input = input.slice(0, -1);
            displayInput.innerText = input;
            return;
        }

        if(target.classList.contains('equals')) {
            result = eval(input);
            displayInput.innerText = result;
            displayResult.innerText = "";
            calculationHistory();
            return;
        }

        
        inputDigit(target.innerText);
        displayInput.innerText = input;
        displayResult.innerText = result;
        
    })


}