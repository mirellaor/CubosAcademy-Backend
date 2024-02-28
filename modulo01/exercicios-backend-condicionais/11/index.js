//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 20000000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 60;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
let totalJaPagoPeloAluno = 1800000;
const valorParcela = ((rendaMensalEmCentavos * 0.18) / 100);

if (mesesDecorridos > 60) {
    console.log("Você não precisa mais pagar, pois após 60 meses, independente de ter quitado ou não o valor total do curso, a pessoa não deve nada.")
} else if (rendaMensalEmCentavos <= 200000) {
    console.log("Você ainda não precisa pagar, pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else if (totalJaPagoPeloAluno == 1800000) {
    console.log("Você não precisa mais pagar, pois o valor já foi quitado.");
} else {
    console.log(`O valor da parcela desse mês é R$ ${valorParcela} reais.`);
}