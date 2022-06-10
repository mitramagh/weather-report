"use strict";



const state = {
  city: "Seattle",
  temperature: 65
};

const addBtn = () => {
  state.temperature += 1;
  console.log(state);
  const currentTemperature = document.querySelector("#amountSpan");
  currentTemperature.textContent = `${state.temperature} ℉`;
};

const subBtn = () => {
  state.temperature -=1;
  const currentTemperature = document.querySelector("#amountSpan");
  currentTemperature.textContent = `${state.temperature} ℉`;
};

const changeColorAndLandscapeBasedOnTemp = () => {
  let tempColor = document.getElementById('amountSpan')
  console.log(tempColor);
  let landscape = document.querySelector('#landscape-container');
  if (state.temperature >= 80) {
    tempColor.className = 'red';
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂🍳';

  } else if (state.temperature >= 70 && state.temperature < 80) {
    tempColor.className = 'orange';
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';

  } else if (state.temperature >= 60 && state.temperature < 70) {
    tempColor.className = 'yellow';
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';

  } else if (state.temperature >= 50 && state.temperature < 60) {
    tempColor.className = 'green';
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';

  }else if (state.temperature < 50) {
    tempColor.className = 'teal';
    landscape.textContent = '⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️⛄️';

}
}




const registerEventHandlers = () => {
  const increaseTemperature = document.querySelector("#add");
  increaseTemperature.addEventListener("click", addBtn);
  increaseTemperature.addEventListener("click", changeColorAndLandscapeBasedOnTemp);
  const decreaseTemperature = document.querySelector("#sub");
  decreaseTemperature.addEventListener("click", subBtn);
  decreaseTemperature.addEventListener("click", changeColorAndLandscapeBasedOnTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
