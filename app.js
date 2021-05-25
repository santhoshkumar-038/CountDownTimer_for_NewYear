const daysE1 = document.querySelector('#days');
const hoursE1 = document.querySelector('#hours');
const minutesE1 = document.querySelector('#min');
const secondsE1 = document.querySelector('#seconds');
const newYears = '1 jan 2022';

function countDown() {
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    console.log(days, hours, minutes, seconds);
    
    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minutesE1.innerHTML = formatTime(minutes);
    secondsE1.innerHTML = formatTime(seconds);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
}

countDown()
setInterval(countDown,1000)