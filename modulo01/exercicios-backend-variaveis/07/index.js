//Calculando o número de pessoas infectadas pelo covid ao decorrer dos dias

let populacaoInfectadaInicialmente = 1000;
let quantidadeTransmissao = 4;
let tempoPercorrido = 100;

let totalInfectados = (populacaoInfectadaInicialmente * (quantidadeTransmissao ** (tempoPercorrido / 7)));
console.log(`O total de pessoas infectadas nesse tempo será de ${totalInfectados}`);