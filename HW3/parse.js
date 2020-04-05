let parseBut = document.querySelector('#parse');
let countBut = document.querySelector('#count');
let line = document.querySelector('input');
let list = document.querySelector('.listIn ul');
let popup = document.querySelector('.modal');
let popText = document.querySelector('#msg');
let closePop = document.querySelector('.close');

parseBut.addEventListener('click', parseLine);
countBut.addEventListener('click', countLetters);
closePop.addEventListener('click', function() {
  popup.style.display = 'none';
})

function parseLine() {
  if (line.value == '') {
    return;
  }
  let wordsArr = line.value.split(' ');
  for (let i = 0; i < wordsArr.length; i++) {
    let liElem = document.createElement('li');
    liElem.innerText = wordsArr[i];
    list.append(liElem);

    if (i == 0) {
      liElem.style.textTransform = 'uppercase';
    }

    if (i == (wordsArr.length - 1)) {
      liElem.style.textTransform = 'lowercase';
    }

    if (i == (wordsArr.length - 2)) {
      liElem.style.textTransform = 'lowercase';
    }
  }
  line.value = '';
}

function countLetters() {
  let letter = prompt('What letter do you want to find?', '');
  let patt = new RegExp(letter, 'g');
  let allLett = line.value.match(patt);

  if (allLett !== null) {
    popText.innerHTML = `Quanity of letter <b>${letter}</b> are ${allLett.length}`;
    popup.style.display = 'block';
  } else {
    popText.innerHTML = `Letter(s) not find.`;
    popup.style.display = 'block';
  }
}
