//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "cheque";
//valor da mercadoria (centavos)
const valorDoProduto = 13000;
const credito = (valorDoProduto - (valorDoProduto * 0.05));
const cheque = valorDoProduto - (valorDoProduto * 0.03);
const debOuDin = valorDoProduto - (valorDoProduto * 0.1);

if (tipoDePagamento == "credito") {
    console.log(`Valor a ser pago: R$${(credito / 100).toFixed(2)}`);
} else if (tipoDePagamento == "cheque") {
    console.log(`Valor a ser pago: R$${(cheque / 100).toFixed(2)}`);
} else if (tipoDePagamento == "debito" || "dinheiro") {
    console.log(`Valor a ser pago: R$${(debOuDin / 100).toFixed(2)}`);
}
