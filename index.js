
const keys = document.getElementById('keys')
const screen = document.getElementById('main')
const equals = document.getElementById('equals')

function operate(operand1 , operand2 , operator){
    if(operator == "+"){
        return add(operand1, operand2)
    }
    else if(operator == "-"){
        return subtract(operand1, operand2)
    }
    else if(operator == "*"){
        return multiply(operand1, operand2)
    }
    else if(operator == '/'){
        return divide(operand1 , operand2)
    }
    else if(operator == "^"){
        return pow(operand1, operand2)
    }
}
let operand1 = ''
let operand2 = ''
let operation = ''
let operations = ['*' , '/' , '+' , '-' , '^']

keys.addEventListener('click' , e=>{
    e.stopPropagation()
    let TARGET  = e.target.id
    if(TARGET  == 'AC'){
        operand1 = ''
        operand2 = ''
        operation = ''
        screen.textContent = ''
        equals.textContent = ''
    }
    else if(TARGET == 'keys'){

    }
    else if(TARGET == 'DEL'){
        let content = screen.textContent
        content = content.slice(0,content.length-1)
        screen.textContent = content
    }
    else if(TARGET == 'equal'){
        equalFunction()
        
    }
    else if(TARGET == '+' || TARGET == '-' || TARGET == '*' || TARGET == '/' || TARGET == '^'){
        if(equals.textContent != ''){
            operand1 = equals.textContent
            screen.textContent = "ans"
            
        }
        screen.textContent += TARGET
        
        
        

    }
   
    else{
        screen.textContent += TARGET
        if(equals.textContent != ''){
            equalFunction()
        }
    }
    


})
function equalFunction(){
    determineOps(screen.textContent)
    number = (calc(operand1 , operand2 , operation))
    if(Number.isInteger(number)){
        equals.textContent = number
    }else{
        equals.textContent = Number.parseFloat(number).toFixed(3)
    }
        
        screen.textContent = ''
        operand1 = ''
        operand2 = ''
        operation = ''
}
function determineOps(string){

   const re =  /[\+\*\-\/\^]/
   for(let i = 0 ; i < string.length ; i++){
    if((string[i] == '+' || string[i] == '-' || string[i] == '*' || string[i] == '/' || string[i] == '^')){
        operation += string[i]
        
    }
   }
   
    let stringArr = string.split(re)
    if(operand1 == '')
    operand1 = stringArr[0]


    operand2 = stringArr[1]
    console.log(stringArr)
    console.log(operand1)
    console.log(operand2)
    

}







function calc(op1,op2,operator){
    if(operator.length != 1){
        return"ERR"
        
    }
    if(operand1 == '' || operand2 == ''){
        return "ERR"
        
    }
    return operate(op1 , op2 , operator)
}















function add(a,b){
    
    return Number.parseFloat(a) + Number.parseFloat(b)
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return (a/b)
}
function pow(a,b){
    return a ** b
}
