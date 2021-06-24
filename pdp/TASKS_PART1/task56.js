"use strict";

let inputData = {
  place: "Место где было совершено нарушение",
  date: "2021-05-21",
  lawArticle: "12.09.2 - Превышение скорости движения ТС от 20 до 40 км/ч",
  documentTitle:
    "Постановление по видеофиксации №11111111111111111111 от 20.05.2021",
};

const getFine = (data) => {

  const root = document.getElementById("root");
  let fragment = new DocumentFragment();

  for (let item in data) {
    const title = document.createElement("h3");
    const content = document.createElement("p");
    content.textContent = `${data[item]}`;

    if (item === "place") {
      title.textContent = "МЕСТО";
    }

    if (item === "date") {
      title.textContent = "ДАТА";
    }

    if (item === "lawArticle") {
      title.textContent = "СТАТЬЯ";
    }

    if (item === "documentTitle") {
      title.textContent = "ПОСТАНОВЛЕНИЕ";
    }

    fragment.append(title);
    fragment.append(content);
  }

  root.append(fragment);
};

getFine(inputData);
