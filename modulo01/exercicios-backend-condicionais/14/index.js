//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 3.1;

const consumoAgua = (quantidadeDeAguaIngerida < 1.5 ? "Risco Alto - Você está ingerindo pouquissima água, beba mais água!" : (quantidadeDeAguaIngerida <= 3 ? "Risco Moderado - Você está ingerindo pouca água, beba mais!" : (quantidadeDeAguaIngerida > 3 ? "Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!" : "")))

console.log(consumoAgua);