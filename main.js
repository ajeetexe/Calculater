var mainData = document.getElementById("result");
var num1=0,num2=0;
let addition = false;
let multiplication =false;
let substration =false;
let division =false;
mainData.readOnly = true;


function one(){
    data = mainData.value;
    mainData.value = data + "1";
}
function two() {
    data = mainData.value;
    mainData.value = data +"2";
}
function three() {
    data = mainData.value;
    mainData.value = data +"3";
}
function four() {
    data = mainData.value;
    mainData.value = data +"4";
}
function five() {
    data = mainData.value;
    mainData.value = data +"5";
}
function six() {
    data = mainData.value;
    mainData.value = data +"6";
}
function seven() {
    data = mainData.value;
    mainData.value = data +"7";
}
function eight() {
    data = mainData.value;
    mainData.value = data +"8";
}
function nine() {
    data = mainData.value;
    mainData.value = data +"9";
}
function zero() {
    data = mainData.value;
    mainData.value = data +"0";
}
function dot() {
    let count = 0;
    data = mainData.value;
    for (let x of data) {
        if(x==="."){
            count = count + 1;
        }
    }
    if(count === 0 && data !== ""){
        mainData.value = data +".";
    }
    
}
function cancel(){
    mainData.value = "";
}
function delet(){
    data = mainData.value;
    let len = data.length-1;
    let newData = data.substring(0,len);
    mainData.value = newData
}
function plus(){
    data = mainData.value;
    num1 = parseFloat(data);
    mainData.value="";
    addition = true;
}
function divide(){
    data = mainData.value;
    num1 = parseFloat(data);
    mainData.value="";
    division =true;
}
function minus(){
    data = mainData.value;
    num1 = parseFloat(data);
    mainData.value="";
    substration =true;
}
function Multiply(){
    data = mainData.value;
    num1 = parseFloat(data);
    mainData.value="";
    multiplication =true;
}
function equal(){
    data = mainData.value;
    num2 = parseFloat(data);
    if(addition){
        let res = num1+num2;
        mainData.value = res.toString();
        addition = false;
    }else if(substration){
        let res = num1 - num2;
        mainData.value = res.toString();
        substration =false;
    }else if(multiplication){
        let res = num1*num2;
        mainData.value = res.toString();
        multiplication = false;
    }else if(division){
        try {
            let res = num1/num2;
            mainData.value = res.toString();
            division = false;
        } catch (error){
            mainData.value = "Error"
        }
    }    
}

window.addEventListener('keydown',function(e){
    if(e.keyCode == 48){
        zero();
    }else if(e.keyCode == 49 || e.keyCode == 96){
        one();
    }else if(e.keyCode == 50 || e.keyCode == 97){
        two();
    }else if(e.keyCode == 51 || e.keyCode == 98){
        three();
    }else if(e.keyCode == 52 || e.keyCode == 99){
        four();
    }else if(e.keyCode == 53 || e.keyCode == 100){
        five();
    }else if(e.keyCode == 54 || e.keyCode == 101){
        six();
    }else if(e.keyCode == 55 || e.keyCode == 102){
        seven();
    }else if(e.keyCode == 56 || e.keyCode == 103){
        eight();
    }else if(e.keyCode == 57 || e.keyCode == 104){
        nine();
    }else if(e.keyCode == 8 || e.keyCode == 105){
        delet();
    }else if(e.keyCode == 106){
        Multiply();
    }else if(e.keyCode == 107){
        plus();
    }else if(e.keyCode == 109){
        minus();
    }else if(e.keyCode == 111){
        divide();
    }else if(e.keyCode == 187){
        equal();
    }else if(e.keyCode == 110 || e.keyCode == 190){
        dot();
    }else if(e.keyCode == 46){
        cancel()
    }
});

