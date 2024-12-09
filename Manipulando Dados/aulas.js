// const botaoComentar = document.getElementById("botao-comentar");
// const inputComentario = document.getElementById("campo-comentario");
// const comentario = document.createElement("p");

// botaoComentar.addEventListener("click", () => {
//     const comentarioSalvo = JSON.stringify(comentario.innerText);
//     localStorage.setItem("comentarioUsuario", comentarioSalvo);
//     document.body.appendChild(comentario);
// });

// inputComentario.addEventListener("keyup", (e) => {
//     comentario.innerText = e.target.value; 
// })

// document.addEventListener("load", () => {
//     const meuComentario = JSON.parse(localStorage.getItem("comentarioUsuario"));

//     if(meuComentario) {
//         comentario.innerText = `Fulano comentou: ${meuComentario}`;
//         document.body.appendChild(comentario)
//         console.log("Comentario carregado com sucesso!")
//     } else {
//         comentario.innerText = "Ops! Houve algum erro ao carregar último comentário. Tente novamente mais tarde"
//     }
// })

//=================================================================================================================

const botaoLimpaDados = document.getElementById("limpa-dados");

const frutas = ["Laranja", "Banana", "Melancia", "Morango", "Carambola", 
    "Jambo", "Uva", "Maçã", "Goiaba", "Pêra", "Pitanga", "Amora", "Melão", 
    "Jabuticaba", "Abacate", "Jenipapo", "Graviola", "Côco", "Mexerica", "Maracujá"];


for (let i = 0; i < frutas.length; i++) {
    localStorage.setItem(`Fruta_${parseInt(i)}`, frutas[i]);
}

botaoLimpaDados.addEventListener("click", () => localStorage.clear());

for (let i = 0; i < frutas.length; i++) {
    sessionStorage.setItem(`Fruta_${parseInt(i)}`, frutas[i]);
    console.log(sessionStorage.getItem(`Fruta_${parseInt(i)}`));
}