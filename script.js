// selecting html elements

const currentDisplayScreen = document.querySelector(".currentDisplay")
const previousDisplayScreen = document.querySelector(".previousDisplay")
const numberButtons = document.querySelectorAll("#number")
const operatorButtons = document.querySelectorAll("#operator")
const equalToOperator = document.querySelector("#equal-to")
const clearButton = document.querySelector("#clear")
const backspaceButton = document.querySelector("#back-button")
const decimalButton = document.querySelector("#decimal-point")



// declaring variables

currentDisplayScreen.textContent = 0
let firstNumber = ''
let secondNumber = ''
let currentOperator = null;
let result = 0;


// buttons and event listners


numberButtons.forEach(numberBtn => numberBtn.addEventListener('click', () => {
    displayNumberOnScreen(numberBtn.textContent)
}))


operatorButtons.forEach(operatorBtn => operatorBtn.addEventListener('click', () => {
    displayOperatorOnScreen(operatorBtn.textContent)
    previousDisplayScreen.textContent = firstNumber + '' + currentOperator
    
  
}))

equalToOperator.addEventListener('click', () => {
    calculate()


})

clearButton.addEventListener('click', () => {
    clearScreen()

})

backspaceButton.addEventListener('click', () => {
    backSpace()


})

decimalButton.addEventListener('click', () => {
    decimalPoint()
    if (!secondNumber.includes(".") ){
        secondNumber += "."
    }
})




// number function

function displayNumberOnScreen(number){
    
    if (currentOperator == null && firstNumber.length <=7){
        currentDisplayScreen.textContent = ''
        firstNumber += number;
        currentDisplayScreen.innerHTML = firstNumber;
        console.log(firstNumber)
    }
    else if (currentOperator !== null && secondNumber.length <= 7){
        secondNumber += number;
        currentDisplayScreen.innerHTML = secondNumber;
        console.log(secondNumber)
    }
}



// operator function

function displayOperatorOnScreen(operator){
 
    if (firstNumber !== '' && secondNumber !== '' && currentOperator !== null){
        calculate()
    }
    currentOperator = operator
    previousDisplayScreen.innerHTML += currentOperator
    console.log(currentOperator)  
}


// return calculation

function calculate(){
    currentDisplayScreen.textContent = round(operate(currentOperator,firstNumber,secondNumber))
    previousDisplayScreen.textContent = currentDisplayScreen.textContent
}


// calculation


function operate(operator, x, y ){
    x = Number(x)
    y = Number(y)
    result = Number(result)
    switch(operator) {

        case '+' :
             result = add(x,y)
             firstNumber = result
             secondNumber = ''
             return result;

        case '-' :
            result = sub(x,y)
            firstNumber = result
            secondNumber = ''
            return result
            
        case '*' :
            result = mul(x,y)
            firstNumber = result
            secondNumber = ''
            return result

        case '/' :
            result = div(x,y)
            firstNumber = result
            secondNumber = ''
            return result   
    }
}



// add


function add(x,y){
    return x + y;
}


// subtract


function sub(x,y){
    return x - y;
}


// multiplication


function mul(x,y){
    return x * y;
}


// division

function div(x,y){
    return x / y;
}


// round

function round(operation){
    return Math.round(operation * 1000) / 1000
}



// clear screen

function clearScreen(){
    currentDisplayScreen.textContent = ''
    previousDisplayScreen.textContent = ''
    firstNumber = ''
    secondNumber = ''
    currentOperator = null
}


// backspace

function backSpace(){
    if (currentOperator == null){
        firstNumber = firstNumber.toString().slice(0, -1)
        currentDisplayScreen.textContent = firstNumber
    }
    else if (currentOperator !== null){
        secondNumber = secondNumber.toString().slice(0, -1)
        currentDisplayScreen.textContent = secondNumber
    }

    
}



// decimal point

function decimalPoint(){
    if (!firstNumber.includes(".")){
        firstNumber += "."
    }
}
