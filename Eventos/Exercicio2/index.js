const botaoAdicionar = document.getElementById("botao-adicionar");
const checkbox = document.getElementsByClassName("checkbox-tarefa");
const divTarefas = document.getElementById("div-tarefas");
const inputDescricao = document.getElementById("campo-descricao");
let listaTarefas = [];

const mensagemSemTarefas = () => {divTarefas.innerHTML = "<p>Não há nenhuma tarefa</p>"};

function CriaTarefa(descricao) {
    let tarefa = {descricao: descricao, concluida: false}
    listaTarefas.push(tarefa);
}

function addTarefaAoHTML(tarefa) {
    const htmlTarefa = 
        `<div class="tarefa">
            <input type="checkbox" class="checkbox-tarefa">
            <p class="descricao-tarefa">${tarefa.descricao}</p>
        </div>`;
    if (listaTarefas.length == 1) {
        divTarefas.innerHTML = htmlTarefa;
    } else {
        divTarefas.innerHTML += htmlTarefa;
    }
}



// addEventListener("load", () => {listaTarefas.length === 0 ? mensagemSemTarefas() : null});
// addTarefa(listaTarefas[0])

botaoAdicionar.addEventListener("click", () => {CriaTarefa(inputDescricao.value)});
botaoAdicionar.addEventListener("click", () => {inputDescricao.value = null});
botaoAdicionar.addEventListener("click", () => {console.log(listaTarefas)});
botaoAdicionar.addEventListener("click", () => {addTarefaAoHTML(listaTarefas[listaTarefas.length - 1])});

checkbox.addEventListener("change", () => {label.classList.toggle("tarefa-concluida", this.checked)})