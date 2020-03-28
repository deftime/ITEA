let list = document.querySelector('.list');
let li = document.getElementsByTagName('li');

let selFirst = document.getElementById('selFirst');
let selLast = document.getElementById('selLast');
let selNext = document.getElementById('selNext');
let selPrev = document.getElementById('selPrevious');
let addEnd = document.getElementById('addEnd');
let addStart = document.getElementById('addStart');
let del = document.querySelector('#del');

selFirst.addEventListener('click', firstElement);
selLast.addEventListener('click', lastElement);
selNext.addEventListener('click', nextElement);
selPrev.addEventListener('click', prevElement);
addEnd.addEventListener('click', addLastElement);
addStart.addEventListener('click', addFirstElement);
del.addEventListener('click', delElement);

function firstElement() {
  // list.firstElementChild.style.color = 'green';  //1й вариант

  // list.childNodes[1].style.color = 'green';      //2й вариант

  for (let key of list.childNodes) {                //3й вариант
    if (key.nodeType == 3) {
      continue;
    } else {
      key.style.color = 'green';
      break;
    }
  }
}

function lastElement() {
  list.lastElementChild.style.color = 'green';
}

function nextElement() {
  for (let key of li) {
    if (key.style.color == 'green') {
      key.style.color = 'black';
      if (key.nextElementSibling !== null) {
        key.nextElementSibling.style.color = 'green';
        break;
      } else {
        list.firstElementChild.style.color = 'green';
        break;
      }
    } else if (key == list.lastElementChild) {
      list.firstElementChild.style.color = 'green';
      break;
    }
  }
}

function prevElement() {
  for (let key of li) {
    if (key.style.color == 'green') {
      key.style.color = 'black';
      if (key.previousElementSibling !== null) {
        key.previousElementSibling.style.color = 'green';
        break;
      } else {
        list.lastElementChild.style.color = 'green';
        break;
      }
    } else if (key == list.lastElementChild) {
      list.lastElementChild.style.color = 'green';
      break;
    }
  }
}

function addLastElement() {
  let newLi = document.createElement('li');
  newLi.innerHTML = prompt('Name of element: ', '');
  list.append(newLi);
}

function addFirstElement() {
  let newLi = document.createElement('li');
  newLi.innerHTML = prompt('Name of element: ', '');
  list.prepend(newLi);
}

function delElement() {
  let choose = prompt('Which element do you want to delete? (Enter number of order, starting from 0)', '');
  for (let i = 0; i < li.length; i++) {
    if (i == choose && choose !== null && choose != '') {
      li[i].remove();
    }
  }
}
