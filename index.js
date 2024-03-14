let hrs = document.getElementById("hrs");
let min = document.getElementById("minutes");
let secs = document.getElementById("seconds");


/* 
Add a function to update the clock and set an interval to this function every second
thus lets use javascripts method.
getHours(), getMinutes(), getSeconds()
*/
function updateClock() {
    let currentTime = new Date();
    hrs.innerHTML = addLeadingZeros(currentTime.getHours());
    min.innerHTML = addLeadingZeros(currentTime.getMinutes());
    secs.innerHTML = addLeadingZeros(currentTime.getSeconds());
}


/*
function add leading zeros if a number is less than 10 to ensure numbers are always dispalyed
with two digits
*/
function addLeadingZeros(num){
    return num < 10 ? "0" + num : num;
}

/*
update the clock at every second, so we use interval
*/
setInterval(updateClock, 1000);

/*
set the initial time
*/
updateClock();