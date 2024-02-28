const original = [1, 4, 12, 2, 44, 88, 112];
const numerosPares = [];

for (let pares of original) {
    if (pares % 2 == 0) {
        numerosPares.push(pares);
    }
}

console.log(numerosPares);