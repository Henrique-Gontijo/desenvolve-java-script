/*
Neste exercício, você vai criar 5 funções. Você pode escolher entre usar 
function ou arrow function.:

    * Soma: recebe dois números e retorna a soma

    * Subtrai: recebe dois números e retorna a diferença

    * Multiplica: recebe dois números e retorna o produto

    * Divide: recebe dois números e retorna o quociente

    * MostraResultado: recebe dois numeros e executa um console para cada operação, 
        * exibindo o nome da operação e o resultado
*/


const Soma = (n1, n2) => n1 + n2 ;

const Subtrai = (n1, n2) => n1 - n2;

const Multiplica = (n1, n2) => n1 * n2;

const Divide = (n1, n2) => n1 / n2 ;

function MostraResultado(num1, num2) {
    console.log(`Soma entre ${num1} e ${num2}`, Soma(num1, num2))
    console.log(`Subtração entre ${num1} e ${num2}`, Subtrai(num1, num2))
    console.log(`Multiplicação entre ${num1} e ${num2}`, Multiplica(num1, num2))
    console.log(`Divisão entre ${num1} e ${num2}`, Divide(num1, num2))
};

MostraResultado(15, 3)