let off = true;
let display="";
let eredmeny=0;
let input="";
function toggle(){
    if(off){
        document.getElementById("calc").className="calc"
        off=false;
    }
    else{
        document.getElementById("calc").className="off"
        off=true;
    }
}
function minimize(){
    window.alert("fishie")

}
function maximize(){

}

function bezar(){ 
    document.getElementById("calc").className="off"
}
function szam(number){
    document.getElementById("input").innerHTML=input+number;
    input=input+number;
}
function muvelet(muvelet,veg){
    szamolas=parseFloat(input);
//    if(display.slice(-1)=="+"||display.slice(-1)=="-"||display.slice(-1)=="÷"||display.slice(-1)=="×"){
//        if(muvelet=="+"||muvelet=="-"||muvelet=="÷"||muvelet=="×")
 //       display = display.substring(0, display.length - 1);    }
 //   else{
    if(muvelet=="+"){
        eredmeny=eredmeny+szamolas;
    }
    else if(muvelet=="-"){
        if(eredmeny==0){
            eredmeny=szamolas;
            console.log("asd")
        }
        else{
        eredmeny=eredmeny-szamolas;
        }
    

    }
    else if(muvelet=="÷"){
        eredmeny=eredmeny/szamolas;
    }
    else if(muvelet=="×"){
        if(eredmeny==0){
            eredmeny=1;
        }
        eredmeny=eredmeny*szamolas;
    }
    if(veg){
        display=display+input

    }
    else{
        display=display+input+muvelet
    }

document.getElementById("display").innerHTML=display;
input=eredmeny
    input="";
//}
}
function torles(){
    document.getElementById("input").innerHTML=""
    number="";
    input="";
}
function fullclear(){
    document.getElementById("display").innerHTML="";
    document.getElementById("input").innerHTML="";
    number="";
    display="";
    eredmeny=0;
    input="";
}
function sqr(){
    szamolas=parseFloat(input);
    szamolas=szamolas*szamolas
    document.getElementById("input").innerHTML=szamolas;
    input=szamolas;
}
function plusminus(){
    szamolas=parseFloat(input);
    szamolas=szamolas*-1;
    document.getElementById("input").innerHTML=szamolas;
    input=szamolas;
}

function szamol(){
    console.log(display.slice(-1))
    muvelet(display.slice(-1),true);
    console.log(eredmeny)
    document.getElementById("display").innerHTML="";
    document.getElementById("input").innerHTML=eredmeny;
    eredmeny=0;
    display="";
    
}


