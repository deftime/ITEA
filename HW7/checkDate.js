let butt = document.querySelector('.buttons button');
let line = document.querySelector('input');
let rez = document.querySelector('.listIn');

butt.addEventListener('click', function () {
  let valid = /^\d{4}\/\d{1,2}\/\d{1,2}$/;
  if (valid.test(line.value)) {
    line.style.borderColor = 'black';
    let ourDay = new Date(line.value).getDay();
    switch (ourDay) {
      case 0:
        rez.innerHTML = 'Воскресение';
        break;
      case 1:
        rez.innerHTML = 'Понедельник';
        break;
      case 2:
        rez.innerHTML = 'Вторник';
        break;
      case 3:
        rez.innerHTML = 'Среда';
        break;
      case 4:
        rez.innerHTML = 'Четверг';
        break;
      case 5:
        rez.innerHTML = 'Пятница';
        break;
      case 6:
        rez.innerHTML = 'Суббота';
        break;
      default:
        rez.innerHTML = 'Wrong date!';
    }

  } else {
    line.style.borderColor = 'red';
  }
})
