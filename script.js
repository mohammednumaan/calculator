const currentDisplayScreen = document.querySelector(".currentDisplay")
const previousDisplayScreen = document.querySelector(".previousDisplay")
const numberButtons = document.querySelectorAll("#number")
const operatorButtons = document.querySelectorAll("#operator")
const equalToOperator = document.querySelector("#equal-to")


let firstNumber = ''
let secondNumber = ''
let currentOperator = null;
let result = 0;

numberButtons.forEach(numberBtn => numberBtn.addEventListener('click', () => {
    displayNumberOnScreen(numberBtn.textContent)
}))


operatorButtons.forEach(operatorBtn => operatorBtn.addEventListener('click', () => {
    displayOperatorOnScreen(operatorBtn.textContent)
    
  
}))

equalToOperator.addEventListener('click', () => {
    calculate()
})

function displayNumberOnScreen(number){
    
    if (currentOperator == null){
        firstNumber += number;
        currentDisplayScreen.innerHTML = firstNumber;
        console.log(firstNumber)
       

    }
    else if (currentOperator !== null){
        secondNumber += number;
        currentDisplayScreen.innerHTML = secondNumber;
        console.log(secondNumber)

    }

}

function displayOperatorOnScreen(operator){
 
    if (firstNumber !== '' && secondNumber !== '' && currentOperator !== null){
        
        calculate()
    }
    currentOperator = operator
    currentDisplayScreen.innerHTML += currentOperator
    console.log(currentOperator)
  
   
}

function calculate(){
    console.log(operate(currentOperator,firstNumber,secondNumber))
}


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


function add(x,y){
    return x + y;
}

function sub(x,y){
    return x - y;
}

function mul(x,y){
    return x * y;
}

function div(x,y){
    return x / y;
}


