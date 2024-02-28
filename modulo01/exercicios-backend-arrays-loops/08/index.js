const numeros = [22, 4, 1, 8, 11, 7, 30];
let maiorNum = [];

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

console.log(`O maior número é: ${maiorNum}!`);