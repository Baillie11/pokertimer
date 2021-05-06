let timeseconds=1800;
const timer = document.getElementById('countdown_clock');

//timer.innerHTML = "00:" + timeseconds;

const CountDown = setInterval (()=>{
     timeseconds--;
     DisplayTime(timeseconds);
     if(timeseconds <=0 || timeseconds<1){
         clearInterval(CountDown)
     }  
    },1000)



function DisplayTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    timer.innerHTML = `
    ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
    `;
}

    // Pause or continue the Countdown Clock

let btn = document.getElementById("play"); 
var clicked = false;
function toggle() {
    if (clicked == false) {
        clicked=true
        btn.innerHTML="Pause"
    } else {
        clicked=false
        btn.innerHTML="Play"
    }
}

