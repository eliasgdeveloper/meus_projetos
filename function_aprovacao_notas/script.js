function calcularMedia(num1, num2, num3) {
  let media = (num1 + num2 + num3) / 3;

  // Verifica se a média é suficiente para aprovação
  if (media >= 7) {
    return `Aprovado com média ${media.toFixed(2)}`;
  } else {
    return `Reprovado com média ${media.toFixed(2)}`;
  }
}

// Testando a função
console.log(calcularMedia(8, 7, 9)); // Aprovado com média 8.00
console.log(calcularMedia(5, 6, 4)); // Reprovado com média 5.00
console.log(calcularMedia(6, 7, 7)); // Aprovado com média 6.67



