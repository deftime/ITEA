// let indexLine = document.forms.regexp.elements.index;
// let ipLine = document.forms.regexp.elements.ip;
// let priceLine = document.forms.regexp.elements.price;
// let dataLine = document.forms.regexp.elements.data;

let inputs = document.querySelectorAll('input');
let icons = document.querySelectorAll('.icon');

for (let key of inputs) {
  key .value = '';
  key.addEventListener('blur', function() {
    let str = this.value;
    if (this.getAttribute('name') == 'index') {
      let reg = /\b\d{5}\b/;
      if (reg.test(str)) {
        icons[0].setAttribute('src', 'check.png');
      } else {
        icons[0].setAttribute('src', 'cross.png');
      }
    } else if (this.getAttribute('name') == 'ip') {
      let reg = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
      if (reg.test(str)) {
        icons[1].setAttribute('src', 'check.png');
      } else {
        icons[1].setAttribute('src', 'cross.png');
      }
    } else if (this.getAttribute('name') == 'price') {
      let reg = /^\$\d{1,}\.\d{1,3}$/
      if (reg.test(str)) {
        icons[2].setAttribute('src', 'check.png');
      } else {
        icons[2].setAttribute('src', 'cross.png');
      }
    } else if (this.getAttribute('name') == 'data') {
      let reg = /^\d{1,2}\/\d{1,2}\/\d{1,4}$/
      if (reg.test(str)) {
        icons[3].setAttribute('src', 'check.png');
      } else {
        icons[3].setAttribute('src', 'cross.png');
      }
    }
  })
}
