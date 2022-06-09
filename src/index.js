"use strict";




let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#sub');
let qty = document.querySelector('#qtyBox');

addBtn.addEventListener('click',()=>{
  qty.value = parseInt(qty.value) + 1;
});

subBtn.addEventListener('click',()=>{
  if (qty.value <= 0) {
    qty.value = 0;
  }
  else{
    qty.value = parseInt(qty.value) - 1;
  }
});


const getCurrentTemp = () => {
  const currentTemp = new Temp??();
  return currentTemp;
}


const increaseTemperature = () => {
  const newTemperature = temperatureValue + 1;
  setTemperatureValue(newTemperature);
  if (newTemperature >= 76) {
    setTemperatureColor('hot');
  }
};

const decreaseTemperature = () => {
  const newTemperature = temperatureValue - 1;
  setTemperatureValue(newTemperature);
  if (newTemperature < 65) {
    setTemperatureColor('cold');
  }
};

var temp = 70; // use API call to get the real temp
            function updateTemp() {                
                document.getElementById("TempPlaceholder").innerHTML = temp;
            }