
let quantidade = 0;
let preco = 0;

const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        for (let compras of carrinho.produtos) {
            quantidade += compras.qtd;
            preco += compras.precoUnit * compras.qtd;
        }
        console.log(`Cliente: ${carrinho.nomeDoCliente}\nTotal de itens: ${quantidade} itens \nTotal a pagar: R$${preco / 100}`)
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}


function addProdutoAoCarrinho(carrinho, produto) {
    for (let i = 0; i < carrinho.lenght; i++) {
        if (produto.id === carrinho[i].id) {
            carrinho.qtd[i] += produto.qtd;
        }
    }
}


addProdutoAoCarrinho(carrinho.produtos, novaBermuda);

carrinho.imprimirResumo();