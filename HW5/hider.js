let outerBlock = document.querySelector('.listIn');

outerBlock.addEventListener('click', function(event) {
  if (event.target.innerText == 'Hide') {
    event.target.parentElement.remove();
  }
  if (event.currentTarget.children.length == 0) {
    event.currentTarget.classList.add('flex-down');
    let replaceButt = document.createElement('button');
    replaceButt.innerText = 'Replace';
    replaceButt.onclick = () => window.location.reload();
    event.currentTarget.append(replaceButt);
  }
})
