"use strict";

const currentBrowser = document.querySelector(".current-browser__content");
currentBrowser.textContent = navigator.appVersion; // браузер

const navigatorPlatform = document.querySelector(
  ".navigator-platform__content"
);
navigatorPlatform.textContent = navigator.platform; // тип ОС

const screenWidth = document.querySelector(".screen-width__content");
screenWidth.textContent = screen.width; // высота экрана в пикселях.

const screenHeight = document.querySelector(".screen-height__content");
screenHeight.textContent = screen.height; // ширина экрана в пикселях.

// ** history **
// console.log(history.length); // количество страниц в истории сеанса работы с текущим окном браузера
// history.back(); // открыть предыдущую страницу, можно: history.go(-1);
// history.forward(); // открыть след страницу
// history.go(x); // x - строка(точный адрес) или целое число (на сколько страниц вперед или назад)

const setIntervalStart = document.querySelector(".setIntervalStart"),
  setIntervalStop = document.querySelector(".setIntervalStop"),
  alertBtn = document.querySelector(".alertBtn"),
  promptBtn = document.querySelector(".promptBtn"),
  confirmBtn = document.querySelector(".confirmBtn"),
  contentSetInterval = document.querySelector(".contentSetInterval");

// setInterval
contentSetInterval.textContent = 0;

const counter = () => {
  contentSetInterval.textContent = Number(contentSetInterval.textContent) + 1;
};

let interval;
setIntervalStart.addEventListener("click", () => {
  interval = setInterval(counter, 1000);
});
setIntervalStop.addEventListener("click", () => {
  clearInterval(interval);
});

// alert
alertBtn.onclick = () => {
alert("alert ready");
  };

// prompt
promptBtn.onclick = () => {
  let promptTest = prompt("Введите своё имя",["введите ФИО"]);
  if(promptTest && promptTest!=="введите ФИО"){
    alert(`Привет, ${promptTest}`);
  }
      };

// confirm
confirmBtn.onclick = ()=>{
    let isGoodDay = confirm("Сегодня хороший день?");
    // console.log(isGoodDay);
    if(isGoodDay){
        alert(`Отлично! А завтра будет ещё лучше`);
    } else {
        alert(`Мысли позитивно ;)`);
    }
}

// cookies
// Это данные, хранящиеся в небольших текстовых файлах на компьютере пользователя.
document.cookie = "username=Marat Sovan"; 
console.log(document.cookie);
