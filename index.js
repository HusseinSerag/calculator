
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
            if(screen.textContent.length == 4){

            }
            else{
                operand1 = equals.textContent
            screen.textContent = "ans"
            
            }
            
        }
        screen.textContent += TARGET
        
        
        

    }
   
    else{
        screen.textContent += TARGET
        
    }
    


})
function equalFunction(){
    determineOps(screen.textContent)
    number = calc(operand1 , operand2 , operation)
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
    
    if(operation.length == 2 && operation[1] == '-'){
        stringArr.splice(1,1)
        stringArr[1] = '-' + stringArr[1]
        operation = operation[0]
       

       }
       if(operation.length == 3 && operation[0] == '-' && operation[2] == '-'){
        
        stringArr.splice(2,1)
        stringArr[2] = '-' + stringArr[2]
        
      
       }
       
       
       
    if(operand1 == '')
    {
        if(string[0] == '-'){
           
            stringArr.splice(0,1)
            
            console.log(operation)
            
            console.log(operation)
            stringArr[0] = '-'+ stringArr[0]
            
        }
        
    }
    
    operand1 = stringArr[0]
    operand2 = stringArr[1]

    
    if(operation.length == 1){
        
        operation = operation
        
    }
    else if(operation.length == 2 && operation[0] == '-' && operation[1] != '-'){
        operation = operation[1]
    }
    else if(operation.length == 2 && operation[1] == '-' && operation[0] != '-'){
        operation = operation[0]
    }
    
    else if(operation.length == 3){
        operation = operation[1]
    }
    
    if(stringArr[0] == 'ans'){
        operand1 = equals.textContent
        console.log(equals.textContent)
        operand2 = stringArr[1]
    }
    
    
    console.log(operand1)
    console.log(operand2)
    console.log(operation)

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
