//Calcular a distância entre dois pontos

let pontox1 = 1;
let pontox2 = 1;
let pontoy1 = 1;
let pontoy2 = 4;

let calculoDistancia = (((pontox2 - pontox1) ** 2) + (pontoy2 - pontoy1) ** 2);
let distanciaEntreOsPontos = Math.sqrt(calculoDistancia);
console.log(distanciaEntreOsPontos);