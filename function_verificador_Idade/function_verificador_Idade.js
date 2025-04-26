function verificadorIdadeParaParqueDeDiversoes(nome, idade) {
    if (idade >= 5 && idade <= 12) {
      console.log(`${nome} tem ${idade} anos. Pode entrar no parque!`);
    } else {
      console.log(`${nome} tem ${idade} anos. Não pode entrar no parque.`);
    }
  }
  
  // Testando com os três nomes
  verificadorIdadeParaParqueDeDiversoes("João", 2);
  verificadorIdadeParaParqueDeDiversoes("Maria", 7);
  verificadorIdadeParaParqueDeDiversoes("Lucas", 18);
  