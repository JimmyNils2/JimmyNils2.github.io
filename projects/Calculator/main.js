const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

keys.addEventListener('click', event =>{

    //Check if the click is outside the button (on the grid-gap) 
    if(!event.target.closest('button')) return;

    const key = event.target; //Get the HTML button
    const keyValue = key.textContent; //Get the button text
    const displayValue = display.textContent;
    
    //Destructuration syntax to use only the property
    const {type} = key.dataset;
    const {previousKeyType} = calculator.dataset;
    
    
    //Check if the key is a number or function
    if ( type =='number'){

        //Check if display is equal to zero
        if( displayValue == '0'){
            if(keyValue == 'π') display.textContent = Math.PI;
            else display.textContent = keyValue;
        }
        //Check if the previous key was a operation to update the display
        else if(previousKeyType == 'operator'){
            display.textContent = keyValue;
        }
        //Concatenate the number o function
        else{
            if(keyValue == 'π') display.textContent = Math.PI;
            else display.textContent = displayValue + keyValue;
        }
    }
    if(type == 'funct'){
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]' );
        operatorKeys.forEach(key => key.dataset.state='');
        const functKeys = keys.querySelectorAll('[data-type="funct"]' );
        functKeys.forEach(key => key.dataset.state='');

        // console.log(keyValue);
        // console.log(type);
        // console.log(displayValue);
        // console.log(key.dataset.key);

        let funct = key.dataset.key;
        
        //Apply any Math functions
        display.textContent=mathFuncts(funct,displayValue);
    }
    //Check if the key is a operator
    if( type =='operator'){
        
        //Get all operation keys and remove selected state
        const operatorKeys = keys.querySelectorAll('[data-type="operator"]' );
        operatorKeys.forEach(key => key.dataset.state='');
        const functKeys = keys.querySelectorAll('[data-type="funct"]' );
        functKeys.forEach(key => key.dataset.state='');
        
        //Reset display value
        if (calculator.dataset.operator = 'c'){
            display.textContent = '0';
            key.dataset.state = '';
        }

        if (calculator.dataset.operator = 'mr'){
            if (calculator.dataset.mr == 0 && displayValue == 0){
                console.log('Es 0');
                calculator.dataset.mr = displayValue;
            }else{
                console.log('Almacena otro numero');
                let firstNumber = displayValue;
                display.textContent = calculator.dataset.mr;
                calculator.dataset.mr = firstNumber;
            }
        }

        //Add selected state to the current key
        key.dataset.state = 'selected';
        
        //Save the first number and operation
        calculator.dataset.firstNumber = displayValue;

        //Get operatoration 
        calculator.dataset.operator = key.dataset.key;
    }

    if(type == 'equal'){
        let firstNumber = calculator.dataset.firstNumber;
        let secondNumber = displayValue;
        let operator = calculator.dataset.operator;
        
        display.textContent = calculate(firstNumber, operator, secondNumber);
    }
    
    //Update the previous type of key operator or number/funct
    calculator.dataset.previousKeyType = type;
});

function calculate(firstNumber, operator, secondNumber){

    firstNumber = parseFloat(firstNumber);
    secondNumber= parseFloat(secondNumber);

    if (operator == 'plus') return firstNumber + secondNumber;
    if (operator == 'minus') return firstNumber - secondNumber;
    if (operator == 'multiplication') return firstNumber * secondNumber;
    if (operator == 'division') return firstNumber / secondNumber;
    if (operator == 'percentage') return firstNumber / 100;
    if (operator = 'nthPower') return Math.pow(firstNumber,secondNumber);
}
function mathFuncts(funct,displayValue){
    if(funct == 'log') return Math.log10(displayValue);
    if(funct == 'e') return Math.E ** displayValue;
    if(funct == 'ln') return Math.log(displayValue);
    if(funct == 'cubeRoot') return Math.cbrt(displayValue);
    if(funct == 'cube') return displayValue*displayValue*displayValue;
    if(funct == 'cube') return displayValue*displayValue*displayValue;
    if(funct == 'tg') return Math.tan(displayValue*Math.PI/180);
    if(funct == 'cos') return Math.cos(displayValue*Math.PI/180);
    if(funct == 'sin') return Math.sin(displayValue*Math.PI/180);
    if(funct == 'squareRoot') return Math.sqrt(displayValue);
    if(funct == 'square') return Math.pow(displayValue,2);
    if(funct == 'factorial') return factorialize(displayValue);
}
function factorialize(num){
    if ( num < 0 ) return -1;
    else if (num == 0) return 1;
    else return (num * factorialize(num -1))
}