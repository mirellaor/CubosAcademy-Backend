const alturaEmCm = 190;

const posicao = (alturaEmCm <= 185 ? "LÍBERO" : (alturaEmCm <= 195 ? "PONTEIRO" : (alturaEmCm <= 205 ? "OPOSTO" : "CENTRAL")))

if (alturaEmCm >= 180) {
    console.log(posicao);
} else {
    console.log("REPROVADO");
}