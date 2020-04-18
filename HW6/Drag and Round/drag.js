let square = document.querySelector('.movingSquare');
let wrap = document.querySelector('.wrapper');

wrap.addEventListener('mousedown', startCord);
wrap.addEventListener('mouseup', endCord);


function startCord(event) {
  if (event.target.classList.contains('movingSquare')) {
    wrap.addEventListener('mousemove', changeCord);
  }
}

function changeCord(event) {
  square.style.top = event.clientY - 20 + 'px';
  square.style.left = event.clientX - 20 + 'px';
}

function endCord() {
  wrap.removeEventListener('mousemove', changeCord);
}
