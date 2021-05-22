"use strict";

// Document Object Model, сокращённо DOM – объектная модель документа, которая представляет все содержимое страницы в виде объектов,
// которые можно менять.
// Объект document – основная «входная точка». С его помощью мы можем что-то создавать или менять на странице.

//  **Selecting elements**
const idTrain = document.getElementById("idTrain"); // ссылка на объект типа Element
const nameTrain = document.getElementsByName("nameTrain"); // NodeList
const nameTag = document.getElementsByTagName("div"); // коллекция HTML
const nameClass = document.getElementsByClassName("classTrain"); // коллекция HTML
const nameSelector = document.querySelector(".classTrainNew"); // NodeList
const nameSelectorAll = document.querySelectorAll(".classTrain"); // NodeList
const getElementsByClassName = document.getElementsByClassName("classTrain"); // для проверки isLive
const querySelectorAll = document.querySelectorAll(".classTrain"); // для проверки isLive
console.log("**Selecting elements**", [
  idTrain,
  nameTrain,
  nameTag,
  nameClass,
  nameSelector,
  nameSelectorAll,
  getElementsByClassName,
  querySelectorAll
]);

// Function               | Live? | Type           | Time Complexity
// querySelector          |       | Element        |  O(n)
// querySelectorAll       |   N   | NodeList       |  O(n)
// getElementById         |       | Element        |  O(1)
// getElementsByClassName |   Y   | HTMLCollection |  O(1)
// getElementsByTagName   |   Y   | HTMLCollection |  O(1)
// getElementsByName      |   Y   | NodeList       |  O(1)

// HTMLCollection - нельзя пройти forEach (можно проходить for или [...HTMLCollection].forEach), NodeList - можно пройти forEach.
// getElement * вызывает возвратные коллекции ссылок, тогда как результаты querySelectorAll содержат копии элементов.
// можно querySelectorAll(#id .class tag)- например, все элементы списка произошли от элемента, который является членом класса foo: querySelectorAll(.foo li)

// проверка isLive (добавленный элемент будет только в getElementsByClassName, в querySelectorAll, его не будет)
const test = document.getElementById("clickGreen"); 
const newEl = document.createElement("div");
newEl.className = "classTrain newEl";
newEl.textContent = "newEl";
test.append(newEl);

// **Traversing elements**
console.log("**Traversing elements**", [
  nameTrain[0].parentElement, // родитель элемент
  nameTrain[0].parentNode, // родитель узел
  idTrain.children, // дочерние элементы
  idTrain.childNodes, // дочерние nodes
  nameSelector.nextSibling, // след брат-узел
  nameSelector.previousSibling, // пред брат-узел
  nameSelector.nextElementSibling, // след брат-элем
  nameSelector.previousElementSibling, // пред брат-элем
]);

//  **Manipulating elements**
console.log("**Manipulating elements**");
const newElement = document.createElement("div");
newElement.className = "nameTrain newElement";
newElement.textContent = "newElement";
idTrain.append(newElement);
console.log(newElement.textContent);
console.log(newElement.innerHTML);
console.log(newElement.innerText);
newElement.innerHTML =  `<li style="color:red">6</li><span style="display: none"> Hide </span>`;
console.log('textContent: ', newElement.textContent); // возвращает весь текст, содержащийся в узле
console.log('innerHTML: ', newElement.innerHTML); // возвращает всё содержимое
console.log('innerText: ', newElement.innerText); // возвращает видимый текст, содержащийся в узле

function getListContent() {
  let fragment = new DocumentFragment();
  for (let i = 7; i <= 9; i++) {
    let li = document.createElement("li");
    li.append(i);
    fragment.append(li); // добавляет node после последнего дочернего элемента (prepend - ставит первым)
  }
  return fragment;
}
idTrain.append(getListContent());

const newElement2 = document.createElement("div");
newElement2.textContent = "0_newElement2";
idTrain.insertBefore(newElement2, nameTrain[0]); // добавляет элемент в  список дочерних элементов родителя перед указанным элементом.
// insertAfter - после

// const ul = document.querySelector("ul");
// console.log(ul)
// document.body.replaceChild(idTrain, ul) замена ul на idTrain
// idTrain.removeChild(nameTrain[0]); удаляем nameTrain[0] из idTrain

// **Working with Attributes**
console.log("**Working with Attributes**");
nameSelector.setAttribute("id", "newId");
console.log(nameSelector.getAttribute("id"));
console.log(nameSelector.hasAttribute("id"));
nameSelector.removeAttribute("id");
console.log(nameSelector.getAttribute("id"));
console.log(nameSelector.hasAttribute("id"));

// **Manipulating Element’s Styles**
console.log("**Manipulating Element’s Styles**");
console.log(nameSelector.className);
nameSelector.classList.add("addedClass");
console.log(nameSelector.className);

const styles = getComputedStyle(nameSelector);
console.log(styles);

// **Working with Events**
console.log("**Working with Events**");

const btn = document.querySelector(".btn");

btn.onclick = () => {
  console.log("onclick DOM");
};

const testEventListener = () => {
  console.log("click addEventListener");
  btn.removeEventListener("click", testEventListener);
};

btn.addEventListener("click", testEventListener);

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM построен");
});

window.onload = () => console.log("страница с картинками и стилями загружена");

window.onbeforeunload = () => {
  return "Есть несохранённые изменения. Всё равно уходим?";
};

// const clickGreen = document.getElementById("clickGreen"); // по ID работает и без поиска элемента

clickGreen.onclick = function (event) {
  console.log(event.target);
  for (var i = 0; i < clickGreen.children.length; i++) {
    clickGreen.children[i].classList.remove("greenColor");
  }
  event.target.classList.add("greenColor");
  console.log(event.target);
};

// mouseover/mouseout
// mousemove
// contextmenu

nameSelector.onmouseover = () => {
  // console.log(clickGreen);
  nameSelector.style.fontSize = "30px";
};
nameSelector.onmouseout = () => {
  // console.log(clickGreen);
  nameSelector.style.fontSize = "16px";
};

document.addEventListener("keydown", function (event) {
  if (event.code === "KeyE") {
    console.log("Eeee");
  }
  if (event.key === "M" && event.ctrlKey) {
    console.log("M");
  }
  if (event.key == "Shift") {
    console.log("Shift");
  }
});

window.addEventListener("scroll", function () {
  console.log(pageYOffset + "px"); // или scrollY
});

console.log(document.documentElement.clientHeight); // - высота окна

//  hiddenElement.scrollIntoView(true/false) - прокручивает чтобы был виден hiddenElement
const btnScroll = document.querySelector(".btnScroll");
const showScroll = document.querySelector(".showScroll");
btnScroll.onclick = () => {
  showScroll.scrollIntoView({ block: "center", behavior: "smooth" });
};

showScroll.onclick = () => {
  window.scrollTo(0, 0);
};
// focus/blur
// tabindex
//   - hashchange event ???

let observer = new MutationObserver((mutationRecords) => {
  console.log(mutationRecords); // console.log(изменения)
});

observer.observe(clickGreen, {
  attributes: true,
  childList: true, // наблюдать за непосредственными детьми
  subtree: true, // и более глубокими потомками
  // characterDataOldValue: true // передавать старое значение в колбэк
});

// **Scripting Web Forms**
console.log("**Scripting Web Forms**");

select.addEventListener("change", () => {
  console.log(select.value);
});

console.log(form.login);
form.login.addEventListener("input", () => {
  console.log(form.login.value);
});
const square2 = document.querySelector(".square2");
form.addEventListener("change", () => {
  square2.style.background = form.currentColor.value;
});
const opt = document.createElement("option");
opt.value = "pineapple";
opt.innerHTML = "ананас";
select.appendChild(opt);
for (let i = 0; i < idTrain.children.length; i++) {
  console.log(idTrain.children[i]);
}

// **free training 
const arr = [...idTrain.children];
console.log(arr);

arr.forEach((e) => {
  console.log(`el`, e);
});

// setTimeout
const addAtrTimeot = function addAtrTimeot () {
  square2.style.background = "red";
  nameSelector.classList.add("timeout");
};
setTimeout(addAtrTimeot, 3000);