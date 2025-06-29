let segundos = 0;
let minutos = 0;
let horas = 0;
let intervalo = null;

function start() {
    if (intervalo) return;  // Impede múltiplos intervalos
    intervalo = setInterval(timer, 1000);
}

function stop() {
    clearInterval(intervalo);
    intervalo = null;
}

function reset() {
    stop();
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById('display').innerText = '00:00:00';
}

function timer() {
    segundos++;
    if (segundos === 60) {
        segundos = 0;
        minutos++;
        if (minutos === 60) {
            minutos = 0;
            horas++;
        }
    }

    let formato = 
        (horas < 10 ? '0' + horas : horas) + ':' +
        (minutos < 10 ? '0' + minutos : minutos) + ':' +
        (segundos < 10 ? '0' + segundos : segundos);

    document.getElementById('display').innerText = formato;
}


