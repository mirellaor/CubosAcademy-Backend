const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "a"
        },
        {
            resposta: "e",
            correta: "d"
        },
        {
            resposta: "b",
            correta: "a"
        },
        {
            resposta: "c",
            correta: "b"
        }
    ],
};

let cont = 0;
let corretas = 0;

function corrigirProva() {

    for (let correcao of prova.questoes) {
        if (correcao.resposta === correcao.correta) {
            cont += prova.valor / prova.questoes.length;
            corretas++;

        }
    }
    console.log(`O aluno(a) ${prova.aluno} acertou ${corretas} questões e obteve nota ${cont}.`)
}

corrigirProva();