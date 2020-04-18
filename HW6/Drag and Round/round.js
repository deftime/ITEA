let round = document.querySelector('.movingRound');
let container = document.querySelector('#wrap');
let buttons = document.querySelectorAll('.buttons button');
let tip = document.querySelector('.tip');

let int;

container.addEventListener('click', function(event) {
  if (event.target == round) {
    startMove();
    buttons[0].setAttribute('disabled', '');
    buttons[2].setAttribute('disabled', '');
  } else if (event.target.innerText == 'Stop') {
    stopMove();
    buttons[0].removeAttribute('disabled');
    buttons[2].removeAttribute('disabled');
  } else if (event.target.innerText == 'Start') {
    startMove();
    buttons[0].setAttribute('disabled', '');
    buttons[2].setAttribute('disabled', '');
  } else if (event.target.innerText == 'Roll-and-Back') {
    moveForward();
    buttons[0].setAttribute('disabled', '');
    buttons[2].setAttribute('disabled', '');
  }
})

buttons[2].addEventListener('mouseenter', function (event) {
  tip.style.top = event.clientY - 70 + 'px';
  tip.style.left = event.clientX + 20 + 'px';
  tip.style.display = 'block';
})

buttons[2].addEventListener('mouseleave', function (event) {
  tip.style.display = 'none';
})


function startMove() {
  int = setInterval(function () {
    if (parseInt(round.style.right) != -265) {
      round.style.right = parseInt(round.style.right) - 1 + 'px';
    } else {
      round.style.right = '1905px';
      round.style.right = parseInt(round.style.right) - 1 + 'px';
    }

  }, 1);
}

function stopMove() {
  clearInterval(int);
}

function moveForward() {
  int = setInterval(function () {
    if (parseInt(round.style.right) != 0) {
      round.style.right = parseInt(round.style.right) - 1 + 'px';
    } else {
      clearInterval(int);
      moveBack();
    }
  }, 1);
}

function moveBack() {
  int = setInterval(function () {
    if (parseInt(round.style.right) != 1650) {
      round.style.right = parseInt(round.style.right) + 1 + 'px';
    } else {
      clearInterval(int);
      moveForward();
    }
  }, 1);
}
