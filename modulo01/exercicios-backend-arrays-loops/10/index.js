const numeros = [0, 3, 4, 1];

let maiorNum = [];
let menorNum = [];

for (let num of numeros) {
    maiorNum.push(num);
    if (maiorNum.length > 1) {
        if (maiorNum[1] > maiorNum[0]) {
            maiorNum.shift();
        } else {
            maiorNum.pop();
        }
    }
}

for (let num of numeros) {
    menorNum.push(num);
    if (menorNum.length > 1) {
        if (menorNum[1] < menorNum[0]) {
            menorNum.shift();
        } else {
            menorNum.pop();
        }
    }
}

console.log(`A maior diferença é: ${maiorNum - menorNum}!`);