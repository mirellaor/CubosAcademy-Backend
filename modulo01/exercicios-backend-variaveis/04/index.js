//calculo de juros compostos

capital = 1000;
taxaFixa = 0.125;
tempo = 5

montante = (((1 + taxaFixa) ** tempo) * capital);
console.log(`O montante é ${montante}`);