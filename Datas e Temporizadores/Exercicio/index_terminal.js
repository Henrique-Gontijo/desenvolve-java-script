// 1 - Defina uma função para calcular o tempo restante até uma data futura:
    // calcularTempoRestante(dataFutura)

// 2 - Defina uma função para atualizar o temporizador na tela:
    // atualizarTemporizador()

// 3-  Use setInterval para atualizar o temporizador a cada segundo.

// 4 -Manipule o objeto Date para calcular a diferença entre a data atual e a data futura.

//* Date(year, month - 1, day, hour, minute, second, millisecond)


function convertToDHMS(milliseconds) {
    let seconds, minutes, hours, days
    seconds = Math.floor(milliseconds / 1000)
    minutes = Math.floor(seconds / 60)
    seconds %= 60
    hours = Math.floor(minutes / 60)
    minutes %= 60
    days = Math.floor(hours / 24)
    hours %= 24

    return [days, hours, minutes, seconds]
}

function calcularTempoRestante(dataFutura) {
    let currentDate = Date.now();
    let remainingTime = dataFutura.getTime() - currentDate;
    let timeList = convertToDHMS(remainingTime);
    return String(`Restam ${timeList[0]} dias, ${timeList[1]} horas, ${timeList[2]} minutos e ${timeList[3]} segundos.`);
}

const exibeTemporizador = (dataFutura) => {
    console.log(calcularTempoRestante(dataFutura));
}

const atualizarTemporizador = (temporizador, segundos) => {
    setInterval(temporizador, segundos * 1000);
}


let futureDate = new Date(2025, 0, 1, 0);
console.log(String(futureDate))


atualizarTemporizador(() => {exibeTemporizador(futureDate)}, 1)