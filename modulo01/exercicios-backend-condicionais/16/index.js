//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 17;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

if (idadeDoAluno >= 18) {
    console.log("Rematrícula realizada com sucesso");
} else {
    if (possuiResponsavel == true) {
        console.log("Rematrícula realizada com sucesso");
    } else {
        console.log("Não é possível fazer a rematrícula");
    }
}