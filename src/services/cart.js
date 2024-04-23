// Quais ações meu carrinho pode fazer

/// CASOS DE USO

// ✅ adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// ✅ calcular o total
async function calculateTotal(userCart) {
    console.log('\nShopee Cart TOTAL:');

    const results = (userCart.reduce((total, item) => total + item.subtotal(), 0));
    console.log(`💲 Total: ${results}`);
}

// ✅ Display do carrinho
async function displayCart(userCart) {
    console.log('\n🛒 Shopee Cart list:');
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal: ${item.subtotal()}`);
    })
}

// ✅ excluir item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if (index !== -1) {
        userCart.splice(index, 1);
    }
}

// remover item - diminui um item
async function removeItem(userCart, index) {
    
    // transforma o indice visual do usuario, para o indice backend
    const deleteIndex = index - 1;

    // é maior do que zero e se é menor do que o tamanho do carrinho 
    if (index => 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1);
    }
}

export { addItem, calculateTotal, removeItem, deleteItem, displayCart }