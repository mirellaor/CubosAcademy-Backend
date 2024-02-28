//Não utilizei o break nesse exercício, pois pode haver mais de um numero 10 no array.

const numeros = [11, 22, 12, 87, 11, 10];

let cont = 0;
let cont1 = 0
    ;
for (let numeroEncontrado of numeros) {
    if (numeroEncontrado == 10) {
        console.log(`Número encontrado na posição ${cont}.`)
        cont1++;
    } cont++;
}

if (cont1 == 0) {
    console.log("-1");
}

