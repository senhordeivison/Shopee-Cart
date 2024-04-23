// CASOS DE USO DOS ITENS

// criar itens com subtotal certo
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity
    }
}

export default createItem;
