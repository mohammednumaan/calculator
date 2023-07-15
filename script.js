// selecting html elements

const currentDisplayScreen = document.querySelector(".currentDisplay")
const previousDisplayScreen = document.querySelector(".previousDisplay")
const numberButtons = document.querySelectorAll("#number")
const operatorButtons = document.querySelectorAll("#operator")
const equalToOperator = document.querySelector("#equal-to")
const clearButton = document.querySelector("#clear")
const backspaceButton = document.querySelector("#back-button")
currentDisplayScreen.textContent = 0


// declaring variables

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




// number function

function displayNumberOnScreen(number){
    
    if (currentOperator == null){
        currentDisplayScreen.textContent = ''
        firstNumber += number;
        currentDisplayScreen.innerHTML = firstNumber;
        console.log(firstNumber)
    }
    else if (currentOperator !== null){
        secondNumber += number;
        previousDisplayScreen.innerHTML = secondNumber;
        console.log(secondNumber)
    }
}



// operator function

function displayOperatorOnScreen(operator){
 
    if (firstNumber !== '' && secondNumber !== '' && currentOperator !== null){
        calculate()
    }
    currentOperator = operator
    currentDisplayScreen.innerHTML += currentOperator
    console.log(currentOperator)  
}


// return calculation

function calculate(){
    currentDisplayScreen.textContent = operate(currentOperator,firstNumber,secondNumber)
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
             operator = null
             return result;
        case '-' :
            result = sub(x,y)
            firstNumber = result
            secondNumber = ''
            operator = null
            return result
        case '*' :
            result = mul(x,y)
            firstNumber = result
            secondNumber = ''
            operator = null
            return result
        case '/' :
            result = div(x,y)
            firstNumber = result
            secondNumber = ''
            operator = null
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
    let newContent = ''
    newContent = currentDisplayScreen.textContent.slice(0, -1)
}

