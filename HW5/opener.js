let butts = document.querySelectorAll('button');
let opener = document.querySelector('.opener');
let block = document.querySelector('.opener-block');
let arrow = document.querySelector('.opener span');
let hint = document.querySelector('.buttons span');

for (let key of butts) {
  key.addEventListener('click', onOff);
}

function openClose(event) {
  event.preventDefault();
  block.classList.toggle('move');
  arrow.classList.toggle('rotate');
}

function onOff() {
  if (this.getAttribute('id') == 'on') {
    hint.style.color = 'green';
    hint.innerText = 'open';
    opener.addEventListener('click', openClose);
  } else {
    hint.style.color = 'red';
    hint.innerText = 'close';
    opener.removeEventListener('click', openClose);
  }
}
