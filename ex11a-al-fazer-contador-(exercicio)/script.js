//Timer
let timer = document.getElementById('timer');
let startButton = document.getElementById('startButton');
let pauseButton = document.getElementById('pauseButton');
let resetButton = document.getElementById('resetButton');
let count = 0;
let intervalId = null;
startButton.addEventListener('click', function() {
    if (intervalId === null) {
        intervalId = setInterval(function() {
            count++;
            timer.textContent = count;
        }, 1000);
    }
});
pauseButton.addEventListener('click', function() {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
});
resetButton.addEventListener('click', function() {
    count = 0;
    timer.textContent = count;
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
});