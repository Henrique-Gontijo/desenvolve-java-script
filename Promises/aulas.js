(() => {
    const botaoAceitar = document.getElementById("botao-aceitar");
    const botaoRecusar = document.getElementById("botao-recusar");

    function chamaPromise(numeroEnviado) {
        const corridaApp = new Promise((resolve, reject) => {
            if (numeroEnviado % 2 === 0) 
                resolve("Sucesso");
            else 
                reject("Deu zebra"); 
        })

        return corridaApp
    }

    botaoAceitar.addEventListener("click", () => {
        chamaPromise(2).then((res) => {console.log(res)});
    })

    botaoRecusar.addEventListener("click", () => {
        chamaPromise(1);
    })
})()