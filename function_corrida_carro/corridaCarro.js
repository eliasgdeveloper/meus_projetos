let tempoCarroA = 58;
let tempoCarroB = 62;

if (tempoCarroA < tempoCarroB) {
    console.log("Carro A venceu com tempo de " + tempoCarroA + " segundos contra " + tempoCarroB + " segundos.");
} else if (tempoCarroB < tempoCarroA) {
    console.log("Carro B venceu com tempo de " + tempoCarroB + " segundos contra " + tempoCarroA + " segundos.");
} else {
    console.log("Empate! Ambos fizeram " + tempoCarroA + " segundos.");
}