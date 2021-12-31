const calculatorDisplay=document.querySelector('h1'),
inputBtns=document.querySelectorAll('button'),
clearBtn=document.getElementById('clear-btn');
let firstValue=0,
operatorValue='',
awaitingNextValue=false;
const calculate = {
    '/': (firstNumber, secondNumber)=>firstNumber/secondNumber,
    '+': (firstNumber, secondNumber)=>firstNumber+secondNumber,
    '*': (firstNumber, secondNumber)=>firstNumber*secondNumber,
    '-': (firstNumber, secondNumber)=>firstNumber-secondNumber,
    '=': (firstNumber, secondNumber)=>secondNumber,
};


function sendNumberValue(number){
    //console.log(number);
   
    if(awaitingNextValue){
        calculatorDisplay.textContent=number;
        awaitingNextValue=false;
    }else{
         let displayValue=calculatorDisplay.textContent;
        calculatorDisplay.textContent= displayValue=== '0' ? number : displayValue+number;
    }
}

function addDecimal(){
    if(awaitingNextValue)return;
    if (!calculatorDisplay.textContent.includes('.')){
        calculatorDisplay.textContent =`${calculatorDisplay.textContent}.`;
    }
}

//console.log(inputBtns);
function useOperator(operator){
 let currentValue = Number(calculatorDisplay.textContent);
 if(operatorValue&& awaitingNextValue){
    operatorValue=operator;
    return;
 }

 if(!firstValue){
     firstValue=currentValue;
 }else{
    console.log(firstValue, operatorValue,currentValue);
    const calculation = calculate[operatorValue](firstValue,currentValue);
    console.log('claculation', calculation);
    calculatorDisplay.textContent=calculation;
    firstValue = calculation;
 }
 awaitingNextValue=true;
 operatorValue=operator;

}

function resetAll(){
    calculatorDisplay.textContent='0';
    firstValue=0;
    operatorValue='';
    awaitingNextValue=false;

}

// eventlisteners for numbers 
inputBtns.forEach((inputBtn) =>{
    if(inputBtn.classList.length ===0){
        inputBtn.addEventListener('click', () => sendNumberValue(inputBtn.value));
    }else if(inputBtn.classList.contains('operator')){
        inputBtn.addEventListener('click', () => useOperator(inputBtn.value));
    }else if(inputBtn.classList.contains('decimal')){
        inputBtn.addEventListener('click', addDecimal);
    }
});

clearBtn.addEventListener('click', resetAll);