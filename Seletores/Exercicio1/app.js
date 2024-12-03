function changeTextById(id, newText) {
    const element = document.getElementById(id);
    element.innerText = newText;
}

function changeTextByTag(tag, newText) {
    const elements = document.getElementsByTagName(tag);

    for(let i in elements) {
        elements[i].innerText = newText;
    }
}

function AddClassByTag(tag, className) {
    const elements = document.getElementsByTagName(tag);

    for(let element of elements) {
        element.classList = className;
    }
}

function changeColorsByClass(className, colorsList) {
    const elements = document.getElementsByClassName(className);

    for(i in elements) {
        elements[i].style.color = colorsList[i]
    }
}

setTimeout(() => {changeTextById("main-title", "CSS e Java Script para o HTML")}, 6000);

setTimeout(() => {changeTextByTag("button", "Clique aqui para curtir a página")}, 6000);

setTimeout(() => {AddClassByTag("p", "paragraph")}, 6000);

const colors = ["orangered", "dodgerblue", "orange"];
setTimeout(() => {changeColorsByClass("nav-item", colors)}, 6000);
