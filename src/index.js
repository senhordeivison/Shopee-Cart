import createItem from "./services/item.js";
import * as cartServices from "./services/cart.js"

const myCart = [];
const myWishList = [];

console.log('Welcome to the your Shopee Cart!');

// adicionando item
const item1 = await createItem('Tênis Nike', 58.90, 2);
const item2 = await createItem('Tênis Adidas', 85.50, 4);

// adicionar item ao carrinho
await cartServices.addItem(myCart, item1);
await cartServices.addItem(myCart, item2);

// display do carrinho
await cartServices.displayCart(myCart);

// remover o item
//await cartServices.removeItem(myCart,1)

// deletar item do carrinho
//await cartServices.deleteItem(myCart,item1.name);
//await cartServices.deleteItem(myCart,item2.name);

await cartServices.calculateTotal(myCart);