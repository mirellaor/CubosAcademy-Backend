const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let num of original) {
    if (num % 2 == 0) {
        pares.push(num);
    } else {
        impares.push(num);
    }
}

console.log(pares, "\n", impares);

//--------------------------------------------------

// cont = 0;
// while (cont < original.length) {
//     if (original[cont] % 2 == 0) {
//         pares.push(original[cont]);
//     } else {
//         impares.push(original[cont]);
//     } cont++;
// }

// console.log(pares, "\n", impares);


//--------------------------------------------------

// for (i = 0; i < original.length; i++) {
//     if (original[i] % 2 == 0) {
//         pares.push(original[i]);
//     } else {
//         impares.push(original[i]);
//     }
// }

// console.log(pares, "\n", impares);
