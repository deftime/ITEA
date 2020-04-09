window.onbeforeunload = function () {
  return 'buy-buy!';
}

window.onload = function () {
  let squares = document.querySelectorAll('.square');
  let sqTitles = document.querySelectorAll('.sq-title');

  let first;
  let second;
  let third;

  for (let key of squares) {
    key.addEventListener('mouseenter', function() {
      first = randomizer();
      second = randomizer();
      third = randomizer();
      this.style.backgroundColor = `rgb(${first}, ${second}, ${third})`;
      this.firstElementChild.innerHTML = `Color<br>(${first}, ${second}, ${third})`;
    })
  }
}

function randomizer() {
  while (true) {
    let random = parseInt(Math.random()*1000);
    if (random <= 255) {
      return random;
    }
  }
}
