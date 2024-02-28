const letras = ["A", "b", "b", "C", "b", "b"];

let cont = 0;
for (let letrasEncontradas of letras) {
    if (letrasEncontradas == "e" || letrasEncontradas == "E") {
        cont++;
    }
}

if (cont > 0) {
    console.log(`Foram ecncontrados ${cont} letras "E" ou "e".`);
} else {
    console.log(`Nenhuma letra "e" ou "E" foi encontrada.`);
}

