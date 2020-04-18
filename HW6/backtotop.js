let backButt = document.querySelector('.back');

let int;

backButt.addEventListener('click', backTop);
window.addEventListener('scroll', showHide);
window.addEventListener('scroll', stopInt);


function stopInt() {
  if (window.pageYOffset == 0) {
    clearInterval(int);
  }
}

function showHide() {
  if (window.pageYOffset > 500) {
    backButt.style.opacity = '1';
  } else {
    backButt.style.opacity = '0';
  }
}

function backTop() {
  int = setInterval(function() {
    window.scrollBy(0, -50);
  }, 20);
}
