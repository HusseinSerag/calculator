
const keys = document.getElementById('keys')
const screen = document.getElementById('screen')

function operate(operand1 , operand2 , operator){
    if(operate == "+"){
        Number.parseInt(operand1) + Number.parseInt(operand2)
    }
}
let operand1 = ''
let operand2 = ''
let operation;
let operations = ['*' , '/' , '+' , '-' , '^']
function determineOperands(operand , operator){
    if(operator == undefined){
        operand1 += operand
    }
    else{
        operand2 += operand
    }
}
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
        operate(operand1 , operand2 , operation)
    }
    else{
        let value = operations.find(operation1 => operation1 == operation)
        console.log(value)
        determineOperands(TARGET , operation)
        screen.textContent += TARGET
    }
   

console.log(operand1)
console.log(operand2)

})
