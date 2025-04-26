  // Calcula a média 

  function calcularMedia(num1, num2, num3) {
  
  let media = (num1 + num2 + num3) / 3; 
   

  // Arredonda a média para duas casas decimais (opcional) 

  media = media.toFixed(2); 

   

  // Verifica se a média é suficiente para aprovação 

  if (media >= 7) { 

    return `Aprovado com média ${media}`; 

  } else { 

    return `Reprovado com média ${media}`; 

  } 

} 

  

// Testando a função 

console.log(calcularMedia(8, 7, 9)); // "Aprovado com média 8.00" 

console.log(calcularMedia(5, 6, 4)); // "Reprovado com média 5.00" 

console.log(calcularMedia(6, 7, 7)); // "Aprovado com média 6.67" 









const horarioInicio = 6;
const horariotermino = 14;
const tarifaDinamicaInicio = 7;
const tarifaDinamicaFim = 9.30;
const tarifaComumInicio = 9.31;
const tarifaComumFim = 14;
const inicioAlmoco = 12;
const terminoAlmoco = 12.30;
const solicitandoCorrida = 8;

function melhorHorarioDeCorrida(tarifaDinamicaInicio, tarifaDinamicaFim, inicioAlmoco, terminoAlmoco) {
    if (solicitandoCorrida >= tarifaDinamicaInicio && solicitandoCorrida <= tarifaDinamicaFim) {
        console.log(`Aceitando corrida no horário ${solicitandoCorrida} com tarifa dinâmica`);
    } else if (solicitandoCorrida >= inicioAlmoco && solicitandoCorrida <= terminoAlmoco) {
        console.log(`Corrida solicitada às ${solicitandoCorrida}. Horário de almoço, corrida não aceita`);
    } else {
        console.log(`${solicitandoCorrida}h. Horário sem tarifa dinâmica, não aceitar corrida`);
    }
}

melhorHorarioDeCorrida(tarifaDinamicaInicio, tarifaDinamicaFim, inicioAlmoco, terminoAlmoco);

