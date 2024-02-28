//valor do produto comprado em reais.
const valorDoProduto = 1000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago em reais
const valorPago = 0;
const valorParcela = valorDoProduto / quantidadeDoParcelamento;
const parcelasRestantes = quantidadeDoParcelamento - (valorPago / valorParcela);

console.log(`Restam ${parcelasRestantes} parcelas de R$${valorParcela}`);
