//calculo da taxa de Juros

let montante = 90000;
let capitalInicial = 60000;
let numeroDeMeses = 24;

let taxaDeJuros = ((((montante / capitalInicial) ** (1 / numeroDeMeses)) - 1) * 100);
console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros}%, pois após ${numeroDeMeses} meses você teve que pagar ${montante}.`);
