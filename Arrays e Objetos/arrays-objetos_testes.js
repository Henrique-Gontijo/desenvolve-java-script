let frutas = ['maçã', 'pêra', 'açaí', 'uva'];
console.log(frutas);
console.log("Adicionando 'manga'");
console.log(frutas.push("manga"));
console.log(frutas)
console.log("Removendo 'manga'");
console.log(frutas.pop());
console.log(frutas);
console.log("Removendo 'maçã'");
console.log(frutas.shift());
console.log(frutas);
console.log("Adicionando 'maçã'");
console.log(frutas.unshift('maçã'));
console.log(frutas);
console.log();
console.log("------------------------------------------------------------");
console.log();
const pessoa = {nome: 'Maria', idade: 31, profissao: 'pianista'};
console.log(pessoa);
console.log("Mudando nome:");
pessoa.nome = 'Carla';
console.log(pessoa.nome);
console.log("Adicionando altura:");
pessoa.altura = 1.65;
console.log(pessoa.altura);
console.log("'idade' existe no objeto 'pessoa'?");
console.log(Object.keys(pessoa).includes("idade"))
console.log("Propriedades da pessoa:");
console.log(Object.keys(pessoa));