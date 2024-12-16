// Crie um sistema simples para gerenciar o estoque de uma livraria. 
    // O sistema deve permitir adicionar livros ao estoque, remover 
    // livros, atualizar a quantidade de livros e listar todos os 
    // livros disponíveis.

// Passos:

// 1 - Defina um array de objetos para armazenar os livros no estoque.

    //* Cada livro deve ser representado por um objeto com propriedades 
        //* titulo, autor e quantidade.

// 2 - Crie funções para gerenciar o estoque:

    //* adicionarLivro(titulo, autor, quantidade) - Adiciona um novo 
        //* livro ao estoque.

    //* removerLivro(titulo) - Remove um livro do estoque pelo título.

    //* atualizarQuantidade(titulo, novaQuantidade) - Atualiza a quantidade 
        //* de um livro no estoque.

    //* listarLivros() - Lista todos os livros no estoque.

// 3 - Use condicionais para verificar se um livro já existe antes de 
    // adicioná-lo ou removê-lo.

// 4 - Use laços de repetição para iterar sobre o array de livros quando necessário.

function verificaLivro(titulo) {
    for (let livro of livros) {
        if (titulo.toLowerCase() == livro.titulo.toLowerCase()) {
            return true;
        } 
    }

    return false;
}

function adicionarLivro(titulo, autor, quantidade) {
    let livro = {titulo: titulo, autor: autor, quantidade: quantidade};
    livros.push(livro);
}

function removerLivro(titulo) {
    let livroAtual;
    for (let indice in livros) {
        livroAtual = livros[indice].titulo;
        if (titulo.toLowerCase() == livroAtual.toLowerCase()) {
            livros.splice(indice, 1);
            break
        }
    }
}

function atualizarQuantidade(titulo, novaQuantidade) {
    for (let livro of livros) {
        if (titulo.toLowerCase() == livro.titulo.toLowerCase()) {
            livro.quantidade = novaQuantidade
            break
        }
    }
}

function listarLivros() {
    for (let livro of livros) {
        console.log(livro.titulo);
    }    
}

let livros = [
    {titulo: "Jogos Vorazes", autor: "Suzanne Collins", quantidade: 15},
    {titulo: "O Cavaleiro Andante", autor: " George R. R. Martin", quantidade: 10},
    {titulo: "O Código Da Vinci", autor: "Dan Brown", quantidade: 12}
];

console.log("Livros de nosso catálogo:", "\n")
console.log(livros);

console.log();
console.log("------------------------------------------------------------------------------");
console.log();

console.log("Adicionando 'O Iluminado':", "\n")

if (verificaLivro("O Iluminado") == false) {
    adicionarLivro("O Iluminado",  "Stephen King", 18);
} else {
    console.log("Este livro já existe em nosso catálogo!", "\n");
}

// console.log(livros);
listarLivros()

console.log();
console.log("------------------------------------------------------------------------------");
console.log();

console.log("Removendo 'O Cavaleiro Andante':", "\n")

if (verificaLivro("O Cavaleiro Andante")) {
    removerLivro("O Cavaleiro Andante");
} else {
    console.log("Este livro não existe em nosso catálogo!")
    console.log("Por favor tente novamente.", "\n")
}

listarLivros()

console.log();
console.log("------------------------------------------------------------------------------");
console.log();

console.log("Atualizando quantidade do livro 'Jogos Vorazes':", "\n")

if (verificaLivro("Jogos Vorazes")) {
    atualizarQuantidade("Jogos Vorazes", 11)
} else {
    console.log("Este livro não existe em nosso catálogo!")
    console.log("Por favor tente novamente.", "\n")
}

console.log(livros)