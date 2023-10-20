
const keys = document.getElementById('keys')
const screen = document.getElementById('screen')

function operate(operand1 , operand2 , operator){
    if(operate == "+"){
        Number.parseInt(operand1) + Number.parseInt(operand2)
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
    }
    else if(TARGET == 'keys'){

    }
    else if(TARGET == 'DEL'){
        let content = screen.textContent
        content = content.slice(0,content.length-1)
        screen.textContent = content
    }
    else if(TARGET == 'equal'){
        determineOps(screen.textContent)
        screen.textContent = operate(operand1 , operand2 , operation)
        
        operand1 = ''
        operand2 = ''
        operation = ''
        
    }
    else if(TARGET == '+' || TARGET == '-' || TARGET == '*' || TARGET == '/'){
        console.log(operation.length)
        
            screen.textContent += TARGET
        operation += TARGET
        

    }
    else{
        screen.textContent += TARGET
    }
    


})

function determineOps(string){

   const re = /[+*-/]/
    stringArr = string.split(re)
    operand1 = stringArr[0]
    operand2 = stringArr[1]
    console.log(operand1)
    console.log(operand2)
    

}
function operate(op1,op2,operator){
    if(operator.length != 1){
        return"ERR"
        
    }
    if(operand1 == '' || operand2 == ''){
        return "ERR"
        
    }
    if(operator == '+'){
        return add(op1 , op2)
    }
    else if(operator == '-'){
        return subtract(op1,op2)
    }
    else if(operator == '*'){
        return multiply(op1,op2)
    }
    else if(operator == '/'){
        return divide(op1,op2)
    }
}

function add(a,b){
    
    return Number.parseInt(a) + Number.parseInt(b)
}
function subtract(a,b){
    return a-b
}
function multiply(a,b){
    return a*b
}
function divide(a,b){
    return a/b
}
