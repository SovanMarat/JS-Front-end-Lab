"use strict";

let inputData = {
  place: "Место где было совершено нарушение",
  date: "2021-05-21",
  lawArticle: "12.09.2 - Превышение скорости движения ТС от 20 до 40 км/ч",
  documentTitle:
    "Постановление по видеофиксации №11111111111111111111 от 20.05.2021",
  coordinates: {
    lat: "55.7522200",
    long: "37.6155600",
  },
  carNumber: "AB23849",
  color: ["red", "black"],
};

const getFine = (data) => {
  const root = document.getElementById("root");
  let fragment = new DocumentFragment();

  for (let item in data) {
    const title = document.createElement("h3");
    const content = document.createElement("p");
    if (typeof data[item] === "object") {
      let contentTemp = "";
      for (let key in data[item]) {
        contentTemp += `${String(data[item][key])}, `;
      }
      content.textContent = contentTemp.slice(0, -2);
      // v2
      // content.textContent = JSON.stringify(data[item]).slice(1, -1); // -- можно вместо цикла по объекту
    } else {
      content.textContent = data[item];
    }

    switch (item) {
      case "place":
        title.textContent = "МЕСТО";
        break;
      case "date":
        title.textContent = "ДАТА";
        break;
      case "lawArticle":
        title.textContent = "СТАТЬЯ";
        break;
      case "documentTitle":
        title.textContent = "ПОСТАНОВЛЕНИЕ";
        break;

      default:
        title.textContent = item;
        break;
    }
    fragment.append(title);
    fragment.append(content);
  }

  root.append(fragment);
};

getFine(inputData);
