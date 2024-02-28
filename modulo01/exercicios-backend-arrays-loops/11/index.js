const original = [5, 7, 10, 13, 21, 17, 26, 34, 100, 118, 245];

let novo = [];

for (let numeros of original) {
    if ((numeros >= 10 && numeros <= 20) || (numeros > 100)) {
        novo.push(numeros);
    }
}

console.log(novo);