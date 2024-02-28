const idade = 12;
const possuiPatologia = false;
const altura = 149;
const ehEstudante = true;

if (idade < 12 || idade > 65 || possuiPatologia == true || altura < 150) {
    console.log("ACESSO NEGADO");
} else if (ehEstudante == false) {
    console.log("20 reais");
} else if (ehEstudante == true) {
    console.log("10 reais");
}