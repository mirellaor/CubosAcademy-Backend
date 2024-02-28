const ladoA = 0;
const ladoB = 0;

const bucha = (ladoA == 0 ? "Branco" : (ladoA == 1 ? "Ás" : (ladoA == 2 ? "Duque" : (ladoA == 3 ? "Terno" : (ladoA == 4 ? "Quadra" : (ladoA == 5 ? "Quina" : (ladoA == 6 ? "Sena" : "")))))));

if (ladoA == ladoB) {
    console.log(`Bucha de ${bucha}`);
} else {
    console.log("Não é bucha!");
}

// if (ladoA == ladoB) {
//     if (ladoA == 0) {
//         console.log("Bucha de branco");
//     } else if (ladoA == 1) {
//         console.log("Bucha de Ás");
//     } else if (ladoA == 2) {
//         console.log("Bucha de Duque");
//     } else if (ladoA == 3) {
//         console.log("Bucha de Terno");
//     } else if (ladoA == 4) {
//         console.log("Bucha de Quadra");
//     } else if (ladoA == 5) {
//         console.log("Bucha de Quina");
//     } else if (ladoA == 6) {
//         console.log("Bucha de Sena");
//     }
// } else {
//     console.log("NÃO É BUCHA");
// }