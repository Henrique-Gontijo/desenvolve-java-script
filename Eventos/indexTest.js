// let message = null
// let personList = ["Joana", "João do caminhão", "Jackson", "Flavinho", "Marcos"]
// console.log(personList)

/* if (personList.length === 0) {
//     message = "Ninguém curtiu esta página";
// } else if (personList.length === 1) {
//     message = `${personList[0]} curtiu esta página`
// } else if (personList.length === 2) {
//     message = `${personList[0]} e ${personList[1]} curtiram esta página`
// } else if (personList.length >= 3) {
//     message = `${personList[0]}, ${personList[1]} e mais ${(personList.length - 2)} pessoas curtiram esta página`
// }

// console.log(message)
*/
/*
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
        <div class="tarefa">
            <input type="checkbox" class="checkbox-tarefa">
            <p class="descricao-tarefa">${tarefa.descricao}</p>
        </div>;
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
*/
const botaoAdicionar = document.getElementById("botao-adicionar");
const divTarefas = document.getElementById("div-tarefas");
const inputDescricao = document.getElementById("campo-descricao");
let listaTarefas = [{descricao:"Comprar pão", concluida: true}];

const mensagemSemTarefas = () => {
  divTarefas.innerHTML = "<p>Não há nenhuma tarefa</p>";
};

function CriaTarefa(descricao) {
  let tarefa = { descricao: descricao, concluida: false };
  listaTarefas.push(tarefa);
}

function addTarefaAoHTML(tarefa) {
    // Cria o container da tarefa
    const tarefaDiv = document.createElement("div");
    tarefaDiv.classList.add("tarefa");

    // Cria o checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox-tarefa");

    // Cria um parágrafo da descrição
    const descricaoP = document.createElement("p");
    descricaoP.classList.add("descricao-tarefa");
    descricaoP.textContent = tarefa.descricao;
    //
    //
    //
    // Adiciona um evento ao checkbox para alterar o estilo
    checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        tarefa.concluida = true;
        tarefaDiv.classList.add("tarefa-concluida"); // Adiciona estilo concluído
    } else {
        tarefa.concluida = false;
        tarefaDiv.classList.remove("tarefa-concluida"); // Remove estilo concluído
    }
    });

    // Monta a tarefa na div
    tarefaDiv.appendChild(checkbox);
    tarefaDiv.appendChild(descricaoP);
    //
    //
    // Adiciona a tarefa ao container principal
    divTarefas.appendChild(tarefaDiv);
    console.log(tarefa)
}

// Limpa a área de tarefas se a lista estiver vazia
botaoAdicionar.addEventListener("click", () => {
  CriaTarefa(inputDescricao.value);
  addTarefaAoHTML(listaTarefas[listaTarefas.length - 1]);
  inputDescricao.value = ""; // Limpa o campo de texto
});

// Mensagem inicial se não houver tarefas
if (listaTarefas.length === 0) {
  mensagemSemTarefas();
} else {
    for (const tarefa of listaTarefas) {
        addTarefaAoHTML(tarefa);
    }
}