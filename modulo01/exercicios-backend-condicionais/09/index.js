const nota = 3;
const conceito = (nota < 4 ? "E" : (nota <= 5.9 ? "D" : (nota <= 7.9 ? "C" : (nota <= 8.9 ? "B" : (nota <= 10 ? "A" : "")))))

console.log(`O estudante obteve conceito ${conceito}`);