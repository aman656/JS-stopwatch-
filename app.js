var globalInterval;

function start(){
    globalInterval = setInterval(function(){
        document.getElementById("mili").innerHTML ++
    if (document.getElementById("mili").innerHTML==100){
        document.getElementById("sec").innerHTML ++
        document.getElementById("mili").innerHTML=0
    }
    else if(document.getElementById("sec").innerHTML==60){
        document.getElementById("min").innerHTML ++
        document.getElementById("sec").innerHTML=0
    }
    },10)
    document.getElementById("shru").disabled = true;

}
function Stop(){
    clearInterval(globalInterval)
    document.getElementById("shru").disabled = false
}
function reset(){
    document.getElementById("min").innerHTML=0;
    document.getElementById("sec").innerHTML=0;
    document.getElementById("mili").innerHTML=0;

}