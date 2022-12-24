import '../css/common.css';

const startRef = document.querySelector('button[data-start]');
const stopRef = document.querySelector('button[data-stop]');
const centerRef = document.querySelector('.center');

startRef.addEventListener('click', onClickStartColorSwitcher);
stopRef.addEventListener('click', onClickStopColorSwitcher);

function onClickStartColorSwitcher() {
  if (startRef) {
    stopRef.disabled = false;
    startRef.disabled = true;
    interval = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
}

function onClickStopColorSwitcher() {
  clearInterval(interval);
  if (stopRef) {
    stopRef.disabled = true;
    startRef.disabled = false;
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onCenterRef() {
  centerRef.style.textAlign = 'center';

  startRef.style.width = '100px';
  startRef.style.height = '100px';
  startRef.style.fontSize = '34px';

  stopRef.style.width = '100px';
  stopRef.style.height = '100px';
  stopRef.style.fontSize = '34px';
}
onCenterRef();
