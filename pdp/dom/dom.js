//  **Selecting elements**
const idTrain = document.getElementById("idTrain");
console.log(idTrain);

const nameTrain = document.getElementsByName("nameTrain");
console.log(nameTrain);

const nameTag = document.getElementsByTagName("div");
console.log(nameTag);

const nameClass = document.getElementsByClassName("classTrain");
console.log(nameClass);

const nameSelector = document.querySelector(".classTrainNew"); // почему исользуют querySelector, ведь getElementsByClassName работает быстрее?
console.log(nameSelector);

const nameSelectorAll = document.querySelectorAll(".classTrain");
console.log(nameSelectorAll);

// **Traversing elements**
console.log(nameTrain[0].parentElement); // родитель элемент
console.log(nameTrain[0].parentNode); // родитель узел

console.log(idTrain.children); // дочерние элементы
console.log(idTrain.childNodes); // дочерние элементы

console.log(nameSelector.nextSibling); // след брат-узел
console.log(nameSelector.previousSibling); // пред брат-узел

console.log(nameSelector.nextElementSibling); // след брат-элем
console.log(nameSelector.previousElementSibling); // пред брат-элем

//  **Manipulating elements**
const newElement = document.createElement("div");
newElement.className = "newElement";
newElement.textContent = "newElement";
idTrain.append(newElement);
console.log(newElement.textContent);
console.log(newElement.innerHTML);
newElement.innerHTML = "<li style=color:red>6</li>";

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
nameSelector.setAttribute("id", "newId");
console.log(nameSelector.getAttribute("id"));
console.log(nameSelector.hasAttribute("id"));
nameSelector.removeAttribute("id");
console.log(nameSelector.getAttribute("id"));
console.log(nameSelector.hasAttribute("id"));

// **Manipulating Element’s Styles**

console.log(nameSelector.className);
nameSelector.classList.add("addedClass");
console.log(nameSelector.className);

const styles = getComputedStyle(nameSelector);
console.log(styles);

// **Working with Events**

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