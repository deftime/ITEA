function validField(event) {
  if (event.target.name == 'name') {
    if (/\S/.test(event.target.value)) {
      event.target.style.backgroundColor = 'white';
    } else {
      event.target.style.backgroundColor = 'red';
    }
  } else if (event.target.name == 'email') {
    if (/\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i.test(event.target.value)) {
      event.target.style.backgroundColor = 'white';
    } else {
      event.target.style.backgroundColor = 'red';
    }
  } else if (event.target.name == 'zip') {
    if (/\d{5}/.test(event.target.value)) {
      event.target.style.backgroundColor = 'white';
    } else {
      event.target.style.backgroundColor = 'red';
    }
  }
}

function checkForm(event) {
  event.preventDefault();
  let rez = document.querySelector('#rez');
  rez.innerText = '';
  for (let i = 0; i < event.target.elements.length; i++) {
    if (event.target.elements[i].style.backgroundColor == 'red') {
      rez.innerText = 'Errors in form! Check it and try again.';
      rez.style.color = 'red';
      return;
    }
  }
}
