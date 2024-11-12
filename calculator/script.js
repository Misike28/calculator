let off = true;
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
}
function maximize(){}

function close(){ 
    document.getElementById("calc").className="off"
    off=true;
}
