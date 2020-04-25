let logLine = document.querySelector('input[type=text]');
let passLine = document.querySelector('input[type=password]');
let msg = document.querySelector('.hint');
let regButt = document.querySelector('.spec-butt');
let logButt = document.querySelector('#log');

let currentLogin;

regButt.addEventListener('click', register);
logButt.addEventListener('click', login);

function register() {
  if (localStorage.getItem(logLine.value)) {
    msg.innerText = 'The user is already exist! Choose another login.';
    msg.style.color = 'red';
  } else if (logLine.value != '' && passLine.value != '') {
    msg.innerText = '';
    localStorage.setItem(logLine.value, passLine.value);
    msg.innerText = 'Registration is done! Please, log in.';
    msg.style.color = 'green';
    logLine.value = '';
    passLine.value = '';
    logLine.style.borderColor = 'black';
    passLine.style.borderColor = 'black';
  } else {
    logLine.style.borderColor = 'red';
    passLine.style.borderColor = 'red';
  }
}

function login() {
  currentLogin = logLine.value;
  if (localStorage.getItem(currentLogin) == passLine.value) {
    showAccount();
    document.cookie = `login=${currentLogin}`;
  } else {
    msg.innerText = 'Login or password is incorrect!';
    msg.style.color = 'red';
  }
}

function logout() {
  document.cookie = `login=${currentLogin}; max-age=0`;
  msg.innerHTML = '';

  logLine.parentElement.style.display = 'block';
  passLine.parentElement.style.display = 'block';
  regButt.style.display = 'inline-block';
  logButt.style.display = 'inline-block';

  this.remove();
}

function showAccount() {
  logLine.parentElement.style.display = 'none';
  passLine.parentElement.style.display = 'none';
  regButt.style.display = 'none';
  logButt.style.display = 'none';

  msg.innerHTML = `<b>${currentLogin}</b> logged in. Click LogOut for exit.`;
  msg.style.color = 'black';

  let logoutButt = document.createElement('button');
  logoutButt.innerText = 'LogOut';
  logoutButt.classList.add('reset');

  logoutButt.addEventListener('click', logout);

  regButt.parentElement.append(logoutButt);
}

window.onload = function () {
  let cookArr = document.cookie.split(';');
  for (let i = 0; i < cookArr.length; i++) {
    if (cookArr[i].indexOf('login') > -1) {
      let startPos = cookArr[i].indexOf('=') + 1;
      currentLogin = cookArr[i].slice(startPos);
      showAccount();
      return;
    } else {
      continue;
    }
  }
}
