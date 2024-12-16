(() => {
    const botaoCarregar = document.getElementById("carrega-devs");
    const inputNome = document.getElementById("nome-dev");
    const botaoGuardar = document.getElementById("guardar-dev");

    async function carregaDevs() {
        const devData = await fetch("https://api.github.com/users");
        const listaDevs = await devData.json();
        
        return listaDevs;
    }

    async function carregaDevPorUser(user) {
        const devData = await fetch(`https://api.github.com/users/${user}`);
        const dev = await devData.json();
        
        return dev;
    }

    function mostraDevs(listaDevs) {
        for (let dev of listaDevs) {
            const blocoDev = document.createElement("p");
            blocoDev.innerText = dev.login;
            document.body.appendChild(blocoDev);
        }
    }
    botaoCarregar.addEventListener("click", () => {
        carregaDevs().then((res) => {mostraDevs(res)});

    })

    inputNome.addEventListener("keyup", (e) => {
        localStorage.setItem("devProcurado", e.target.value);
    })

    botaoGuardar.addEventListener("click", () => {
        const devProcurado = localStorage.getItem("devProcurado");
        carregaDevPorUser(devProcurado).then((res) => {localStorage.setItem("devEncontrado", JSON.stringify(res))});
        const dadosAtuais = localStorage.getItem("devEncontrado");

        console.log(JSON.parse(dadosAtuais))

    })

})()