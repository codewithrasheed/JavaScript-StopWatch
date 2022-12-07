// Stop Watch Function Start

var min = 0;
var sec = 0;
var milli = 0;
var displayMin = document.getElementById("displayMin")
var displaySec = document.getElementById("displaySec")
var displayMilli = document.getElementById("displayMilli")

var interval = 0;

function timer(){
    milli++
    if(milli == 10){
        milli = 0;
        sec++;
    if(sec == 60){
        sec = 0
        min++
    }
}
    displayMilli.innerHTML = milli
    displaySec.innerHTML = sec
    displayMin.innerHTML = min
}


function startTimer(){
    interval = setInterval(function(){
        timer()
    },100)
}


function Pausetimer(){
    clearInterval(interval)
}

function resetTimer(){
    Pausetimer()
    min = 0;
    sec = 0;
    milli = 0;
    displayMilli.innerHTML = milli
    displaySec.innerHTML = sec
    displayMin.innerHTML = min
}

// Stop Watch Function End