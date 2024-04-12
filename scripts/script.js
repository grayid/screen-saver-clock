import { MONTH_NAMES }  from "./constant.js"

// Clock 
const clockHandH = document.querySelector('.clock-hand-h');
const clockHandM = document.querySelector('.clock-hand-m');

function setTime() {
  const d = new Date();
  const m = d.getMinutes();
  const h = d.getHours();

  const mDeg = (( m / 60 ) * 360 );
  const hDeg = (( h / 12 ) * 360 );

  clockHandM.style.transform = `rotate( ${mDeg}deg )`;
  clockHandH.style.transform = `rotate( ${hDeg}deg )`;
}

setInterval( setTime, 1000 );

// Date and time
const now = new Date();

let hours = now.getHours().toString().padStart(2, '0');
let minutes = now.getMinutes().toString().padStart(2, '0');
let seconds = now.getSeconds().toString().padStart(2, '0');

const day = now.getDate();
const month = MONTH_NAMES[now.getMonth()] + ",";
const year = now.getFullYear();

function updateDateAndTime() {
  document.getElementById('hours').innerText = hours + ":";
  document.getElementById('minutes').innerText = minutes + ":";
  document.getElementById('seconds').innerText = seconds;
  document.getElementById('day').innerText = day;
  document.getElementById('month').innerText = month;
  document.getElementById('year').innerText = year;
};

updateDateAndTime();

setInterval(() => {
  const nowInInterval = new Date();

  hours = nowInInterval.getHours().toString().padStart(2, '0');
  minutes = nowInInterval.getMinutes().toString().padStart(2, '0');
  seconds = nowInInterval.getSeconds().toString().padStart(2, '0');

  const day = nowInInterval.getDate();
  const month = MONTH_NAMES[nowInInterval.getMonth()] + ",";
  const year = nowInInterval.getFullYear();

  updateDateAndTime();
}, 1000);