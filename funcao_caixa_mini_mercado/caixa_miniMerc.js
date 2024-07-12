function calcularTotalCompra(produtos) {
    let total = 0;

    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i] === "leite") {
            total += 3.5;
        } else if (produtos[i] === "pao") {
            total += 1.75;
        } else if (produtos[i] === "chocolate") {
            total += 5.25;
        }
    }

    return total;
}

// Exemplo de uso:
const produtosComprados = ["leite", "pao", "leite", "chocolate", "chocolate"];
const totalCompra = calcularTotalCompra(produtosComprados);
console.log("Total da compra:", totalCompra.toFixed(2));