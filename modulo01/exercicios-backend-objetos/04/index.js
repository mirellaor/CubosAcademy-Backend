const usuarios = [
    {
        nome: "João",
        idade: 25,

    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

for (idades of usuarios) {
    if (idades.idade > 17) {
        idades.maior_idade = true;
    } else {
        idades.maior_idade = false;
    }
}

console.log(usuarios);