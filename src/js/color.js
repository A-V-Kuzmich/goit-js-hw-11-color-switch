const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let TIMER = null;
const TIME = 1000;
const lengthColor = colors.length
let num = 0;

const body = document.querySelector('body');
const start = document.querySelector('[data-action="start"]');
const stop = document.querySelector('[data-action="stop"]');

start.addEventListener('click', startChangeColor);
stop.addEventListener('click', stopChangeColor);

function startChangeColor() {
    start.setAttribute('disabled', 'disabled');
    stop.removeAttribute('disabled');

    TIMER = setInterval(changeColor,TIME);
 };
function stopChangeColor() {
    start.removeAttribute('disabled');
    stop.setAttribute('disabled', 'disabled');
    clearInterval(TIMER);
 };
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function changeColor() {
    let number = randomIntegerFromInterval(0, lengthColor - 1);
        if (number === num) {
            number = randomIntegerFromInterval(0, lengthColor - 1);
    }
    body.style.backgroundColor = `${colors[number]}`;
    num = number;
};


