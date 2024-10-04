// console.log("hello World");


let div= document.querySelector("#cnt")
let inp= document.querySelector("#tempInput")
let select=document.querySelector("#unitSelect")


function convertTemp(){
    if(select.value===`Celcius`){
        div.innerHTML=`${inp.value} Celcius is equal to ${(inp.value*9/5)+32} Ferherneit`
        
    }else if(select.value===`Ferherneit`){
        div.innerHTML=`${inp.value} Ferherneit is equal to ${(inp.value-32)*5/9} Celcius`
       
        
    }
}








