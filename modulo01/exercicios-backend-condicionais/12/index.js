
const diaDaSemana = 7;

const dia = (diaDaSemana == 1 ? "segunda-feira" : (diaDaSemana == 2 ? "terça-feira" : (diaDaSemana == 3 ? "quarta-feira" : (diaDaSemana == 4 ? "quinta-feira" : (diaDaSemana == 5 ? "sexta-feira" : (diaDaSemana == 6 ? "sábado" : (diaDaSemana == 7 ? "domingo" : "")))))))

if (diaDaSemana >= 1 && diaDaSemana <= 7) {
    console.log(`O dia da semana é ${dia}.`);
} else {
    console.log("O dia da semana informado não é válido.");
}