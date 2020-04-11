let coverBlock = document.querySelector('.tooltips');
let tooltip = document.querySelector('.tip');

coverBlock.addEventListener('mouseover', showTooltip);
coverBlock.addEventListener('mouseout', hideTooltip);

function showTooltip(event) {
  if (event.target.dataset.tooltip === undefined) {
    return;
  }
  let rect = event.target.getBoundingClientRect();
  let bottom = (document.documentElement.clientHeight - rect.bottom) - 25;
  let right = (document.documentElement.clientWidth - rect.left) - 75;

  tooltip.innerText = event.target.dataset.tooltip;
  tooltip.style.bottom = `${bottom}px`;
  tooltip.style.right = `${right}px`;
  tooltip.style.display = 'block';
}

function hideTooltip() {
  tooltip.style.display = 'none';
}
