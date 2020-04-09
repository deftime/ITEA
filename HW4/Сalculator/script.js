let firstOper = document.querySelector('#firNum');
let sign = document.querySelector('#sign');
let secondOper = document.querySelector('#secNum');

let numbers = document.querySelectorAll('.number');
let actions = document.querySelectorAll('.action');

for (let key of numbers) {
  key.addEventListener('click', function () {
    if (sign.innerText == '') {
      firstOper.innerText += this.innerText;
    } else {
      secondOper.innerText += this.innerText;
    }
  })
}

for (let key of actions) {
  key.addEventListener('click', function () {
    if (secondOper.innerText) {
      let rez = operation(+firstOper.innerText, sign.innerText, +secondOper.innerText);
      firstOper.innerText = rez;
      if (this.innerText != '=') {
        sign.innerText = this.innerText;
      } else {
        sign.innerText = '';
      }
      secondOper.innerText = '';
    } else if (this.innerText != '=') {
      sign.innerText = this.innerText;
    }
  })
}

function operation(a, sign, b) {
  switch (sign) {
    case '+':
      return a + b;
      break;
    case '-':
      return a - b;
      break;
    case '*':
      return a * b;
      break;
    case '/':
      return a / b;
      break;
    default:
      console.log('Wrong parameters!');
  }
}
