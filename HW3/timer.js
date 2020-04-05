let display = document.querySelector('.display');
let startBut = document.querySelector('#start');
let stopBut = document.querySelector('#stop');
let resBut = document.querySelector('#reset');
let hintLine = document.querySelector('.hint');

startBut.addEventListener('click', startCount);
stopBut.addEventListener('click', stopCount);
resBut.addEventListener('click', resetCount);

let countStart;
let countEnd;
let interval;

function startCount() {
  startBut.setAttribute('disabled', '');
  if (display.innerText == '') {
    countStart = prompt('Start number?', '');
    countEnd = prompt('End number?', '');
  }

  if (countStart === null || countEnd === null || countStart == '' || countEnd == '') {
    hintLine.innerText = 'Canceled or empty string!';
  } else if (countStart < countEnd) {
    hintLine.innerText = 'Lets go forward!';
    interval = setInterval(function() {
      if (countStart <= countEnd) {
        display.innerText = countStart;
        countStart++;
      } else {
        hintLine.innerText = "That's all, press Reset";
        stopBut.setAttribute('disabled', '');
      }
    }, 1000);
  } else if (countStart > countEnd) {
    hintLine.innerText = 'Lets roll back!';
    interval = setInterval(function() {
      if (countStart >= countEnd) {
        display.innerText = countStart;
        countStart--;
      } else {
        hintLine.innerText = "That's all, press Reset";
        stopBut.setAttribute('disabled', '');
      }
    }, 1000);
  }
}

function stopCount() {
  hintLine.innerText = "You paused IT!";
  startBut.removeAttribute('disabled');
  clearInterval(interval);
}

function resetCount() {
  hintLine.innerText = "Press Start and GO!";
  startBut.removeAttribute('disabled');
  stopBut.removeAttribute('disabled');
  clearInterval(interval);
  count = 0;
  display.innerText = '';
}
