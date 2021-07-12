"use strict";

const checkBoxes = document.querySelectorAll(".check");
const checkboxDisabled = document.querySelector(".checkboxDisabled");

checkboxDisabled.onclick = ()=>{
    if(checkboxDisabled.checked){
        checkBoxes.forEach(elem=>{
            elem.setAttribute('disabled', true);
        })
    } else {
        checkBoxes.forEach(elem=>{
            elem.removeAttribute('disabled');
        })
    }
}

