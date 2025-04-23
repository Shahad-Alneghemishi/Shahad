let input="";
let operator="";
let num1= null;
let num2= null;

function calc(value){
     
    
    if(["+","-","*","/"].includes(value)){
        if(operator === ""){
            operator= value;
            input +=value;
        }
    }
    else {
        input +=value;
    }
    document.getElementById("display").innerText = input;
}
function equal(){
    let parts= input.split(operator);
     num1= Number(parts[0]);
     num2= Number(parts[1]);
    let result;
    switch(operator){
        case"+":
        result=num1+num2;
        break;
        case "-":
        result=num1-num2;
        break;
        case "*":
            result=num1*num2;
        break;
        case "/":
           result = num2 !== 0 ? num1/num2 : "مايصير تقسم على 0";
        break;    
        default:
            result= "!كمل"
    }
    document.getElementById("display").innerText =result;
    input = result.toString();
    operator="";
}
function clearDisplay(){
    input="";
    operator="";
    document.getElementById("display").innerText = "0";
}