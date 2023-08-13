// selecting html elements

const currentDisplayScreen = document.querySelector(".currentDisplay")
const previousDisplayScreen = document.querySelector(".previousDisplay")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const equalToOperator = document.querySelector(".equal-to")
const clearButton = document.querySelector(".clear")
const backspaceButton = document.querySelector(".back-button")
const decimalButton = document.querySelector(".decimal-point")



// declaring variables

currentDisplayScreen.textContent = 0
previousDisplayScreen.textContent = 0
let firstNumber = ''
let secondNumber = ''
let currentOperator = '';
let result = '';


// buttons and event listners

window.addEventListener('keydown', handleKeyboardInput)


numberButtons.forEach(numberBtn => numberBtn.addEventListener('click', () => {
    numbers(numberBtn.id)
}))


operatorButtons.forEach(operatorBtn => operatorBtn.addEventListener('click', () => {
    operator(operatorBtn.textContent)
  
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
})



// number function

function numbers(number){

    firstNumber = firstNumber.toString()

    if (currentOperator === '' && firstNumber.length <= 7){
        currentDisplayScreen.textContent = ''
        firstNumber += number;
        currentDisplayScreen.textContent += firstNumber;
        previousDisplayScreen.textContent = firstNumber 

    }
    else if (currentOperator !== '' && secondNumber.length <= 7){
        secondNumber += number;
        currentDisplayScreen.textContent = secondNumber;
        previousDisplayScreen.textContent = secondNumber
        previousDisplayScreen.textContent = round(firstNumber) + currentOperator + round(secondNumber)

    }
    
}



// operator function

function operator(operator){

    if (secondNumber !== ''){
        calculate()
    }

    currentOperator = operator
    previousDisplayScreen.textContent += currentOperator
    currentDisplayScreen.textContent += currentOperator

}


// return calculation

function calculate(){

    if (currentOperator !== ''){
        currentDisplayScreen.textContent = round(operate(currentOperator,firstNumber,secondNumber))
        
    }
    else{
        return;
    }

}


// calculation


function operate(operator, x, y ){
    x = parseFloat(x)
    y = parseFloat(y)
    result = parseFloat(result)
    switch(operator) {

        case '+' :
             result = add(x,y)
             firstNumber = result
             secondNumber = ''
             currentOperator = '';
             return firstNumber;

        case '-' :
            result = sub(x,y)
            firstNumber = result
            secondNumber = ''
            currentOperator = '';
            return firstNumber;
            
        case '*' :
            result = mul(x,y)
            firstNumber = result
            secondNumber = ''
            currentOperator = '';
            return firstNumber;

        case '/' :
            result = div(x,y)
            firstNumber = result
            secondNumber = ''
            currentOperator = '';
            return firstNumber;  
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
    if (y === 0) {
        alert("Error : Cannot Divide By 0!")
        clearScreen()
        return x , y
    
    }
    else{
        return x / y;
    }
}


// round

function round(operation){
    return Math.round(operation * 1000) / 1000
}



// clear screen

function clearScreen(){

    currentDisplayScreen.textContent = 0
    previousDisplayScreen.textContent = ''
    firstNumber = ''
    secondNumber = ''
    result = 0;
    currentOperator = ''
}


// backspace

function backSpace(){

    if (currentOperator === ''){
        firstNumber = firstNumber.toString().slice(0,-1)
        currentDisplayScreen.textContent = firstNumber
    }
    else if (currentOperator !== '' && secondNumber !== ''){
        secondNumber = secondNumber.toString().slice(0,-1)
        currentDisplayScreen.textContent = secondNumber 

    }
    previousDisplayScreen.textContent = firstNumber + currentOperator + secondNumber


}


// decimal point

function decimalPoint(){

    firstNumber = firstNumber.toString()
    if (currentOperator === ''){
        if (!firstNumber.includes('.')){
            firstNumber += '.'
        }   
    }
    else if ( currentOperator !== ''){
        if (!secondNumber.includes('.')){
            secondNumber += '.'
        }
    }
}


// handle keyboard input

function handleKeyboardInput(e){
    if (e.key >= 0 && e.key <= 9){
        numbers(e.key)
    }
    if (e.key === '=' || e.key === 'Enter'){
        calculate()
    }
    if (e.key === 'Backspace'){
        backSpace()
    }
    if (e.key === '.'){
        decimalPoint()
    }
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' ){
        operator(e.key)
    }
}
