let alunosSalaA = [ 

    "ana", "bernardo", "carla", "daniel", "elena", "felipe", "gabriela", "henrique", "isabela", "joão", 

    "maria", "nuno", "olivia", "paulo", "quiteria", "rafael", "sara", "tiago", "ursula", "vitor", 

    "xavier", "yara", "zeca", "adriana", "bruno", "clara", "davi", "elisa", "fernando", "gisele", 

    "hugo", "isadora", "jorge", "karina", "lucas", "mariana", "nicolas", "olga", "pedro", "quiteria", 

    "rafaela", "samuel", "tatiana", "ulisses", "valentina", "wagner", "ximena", "yago", "zuleica" 

]; 

  

let alunosSalaB = [ 

    "alice", "bruno", "camila", "diego", "fabiana", "gustavo", "helen", "igor", "julia", "lucas", 

    "marina", "nathan", "olivia", "pedro", "quiteria", "rodrigo", "sabrina", "thiago", "ursula", "vitor", 

    "xenia", "yago", "zara", "amanda", "benjamin", "clara", "daniel", "elena", "francisco", "gabriela", 

    "henrique", "isabela", "joão", "katia", "leonardo", "mariana", "nuno", "olivia", "paulo", "quiteria", 

    "rafael", "sara", "tiago", "ursula", "vitor", "xavier", "yara", "zeca" 

]; 


// Capitalizar nomes das listas originais usando map() e toUpperCase()
let alunosSalaA_Capitalizados = alunosSalaA.map(nome => nome.charAt(0).toUpperCase() + nome.slice(1));
let alunosSalaB_Capitalizados = alunosSalaB.map(nome => nome.charAt(0).toUpperCase() + nome.slice(1));

console.log("Lista de Alunos da Sala A com Nomes Capitalizados:");
console.log(alunosSalaA_Capitalizados);

console.log("\nLista de Alunos da Sala B com Nomes Capitalizados:");
console.log(alunosSalaB_Capitalizados);

// Dividir alunosSalaA em duas fases usando slice()
let meioA = Math.ceil(alunosSalaA.length / 2);
let salaA_Fase1 = alunosSalaA_Capitalizados.slice(0, meioA);
let salaA_Fase2 = alunosSalaA_Capitalizados.slice(meioA);

// Dividir alunosSalaB em duas fases usando slice()
let meioB = Math.ceil(alunosSalaB.length / 2);
let salaB_Fase1 = alunosSalaB_Capitalizados.slice(0, meioB);
let salaB_Fase2 = alunosSalaB_Capitalizados.slice(meioB);

console.log("\nLista de Alunos da Sala A dividida em duas fases com Nomes Capitalizados:");
console.log("Fase 1:", salaA_Fase1);
console.log("Fase 2:", salaA_Fase2);

console.log("\nLista de Alunos da Sala B dividida em duas fases com Nomes Capitalizados:");
console.log("Fase 1:", salaB_Fase1);
console.log("Fase 2:", salaB_Fase2);