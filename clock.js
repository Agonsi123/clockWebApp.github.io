const hourT = document.getElementById("hours");
const minuteT = document.getElementById("minutes");
const secondT = document.getElementById("seconds");
const ampmT = document.getElementById("ampm");

function clockUpdate() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";
    
    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    hourT.innerText = h;
    minuteT.innerText = m;
    secondT.innerText = s;
    ampmT.innerText = ampm;
    
    setTimeout(() =>{
        clockUpdate();
    }, 1000);
}
clockUpdate();