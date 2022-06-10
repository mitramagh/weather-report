'use strict';

// let addBtn = document.querySelector('#add');
// let subBtn = document.querySelector('#sub');
// let qty = document.querySelector('#qtyBox');

// addBtn.addEventListener('click',()=>{
//   qty.value = parseInt(qty.value) + 1;
// });

// subBtn.addEventListener('click',()=>{
//   if (qty.value <= 0) {
//     qty.value = 0;
//   }
//   else{
//     qty.value = parseInt(qty.value) - 1;
//   }
// });

// const getCurrentTemp = () => {
//   const currentTemp = new Temp??();
//   return currentTemp;
// }

// const increaseTemperature = () => {
//   const newTemperature = temperatureValue + 1;
//   setTemperatureValue(newTemperature);
//   if (newTemperature >= 76) {
//     setTemperatureColor('hot');
//   }
// };

// const decreaseTemperature = () => {
//   const newTemperature = temperatureValue - 1;
//   setTemperatureValue(newTemperature);
//   if (newTemperature < 65) {
//     setTemperatureColor('cold');
//   }
// };

// const temp = 70; // use API call to get the real temp
// const updateTemp = () => {
//     document.getElementById("TempPlaceholder").innerHTML = temp;
// }

const cityID = document.getElementById('cityid');
const dispalyName = document.getElementById('display-name');
const displaySky = document.getElementById('display-sky');
const skyType = document.getElementById('skytype');
const reset = document.getElementById('reset');
const defaultCity = 'Seattle';
const updateCity = () => {
  dispalyName.textContent = cityID.value;
};

const resetCity = () => {
  cityID.value = '';
  dispalyName.textContent = defaultCity;
};

const changeSky = (e) => {
  const skyType = e.target.value;
  if (skyType == 'cloudy') {
    displaySky.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  }
  if (skyType == 'rainy') {
    displaySky.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  }
  if (skyType == 'snowy') {
    displaySky.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
  if (skyType == 'sunny') {
    displaySky.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  }
};

const registerEventHandlers = () => {
  cityID.addEventListener('input', updateCity);

  skyType.addEventListener('change', changeSky);

  reset.addEventListener('click', resetCity);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
