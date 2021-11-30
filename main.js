// get the dialLines 
const dialLines = document.getElementsByClassName("diallines");

//get the clock
const clockE1 =document.getElementById("clock");

//draw the diallines
for(let i = 1; i < 60; i++ ) {
    clockE1.innerHTML += `<div class="diallines"></div>`;
    dialLines[i].style.transform = `rotate(${6 * i}deg)`;
}

//make the clock
function clock() {
    //Variables
    const d = new Date(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),

    //calculate the clockwork
        hDeg = h * 30 + m * (360 / 720);
        mDeg = m * 6 + s * (360 / 3600);
        sDeg = s * 6;

    //get the hands
    hourE1 = document.querySelector(".hour-hand");
    minE1 = document.querySelector(".minute-hand");
    secE1 = document.querySelector(".second-hand");

    //set the clock
    hourE1.style.transform =  `rotate(${hDeg}deg)`;
    minE1.style.transform =  `rotate(${mDeg}deg)`;
    secE1.style.transform =  `rotate(${sDeg}deg)`;
}

//update the clock
setInterval("clock()", 500);
