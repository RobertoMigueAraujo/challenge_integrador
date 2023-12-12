
const add = document.querySelector('#add');
const substract = document.querySelector('#substract');
const quantity = document.querySelector('#quantity');
const addToCartBtn = document.querySelector('.item--submit'); 

console.log(add, substract, quantity, addToCartBtn);


add.addEventListener('click', () => {
    quantity.value = Number(quantity.value) + 1;
});


substract.addEventListener('click', () => {
    if (Number(quantity.value) > 0) {
        quantity.value = Number(quantity.value) - 1;
    }
});


addToCartBtn.addEventListener('click', () => {
    const selectedQuantity = Number(quantity.value);
    console.log(`Cantidad seleccionada para agregar al carrito: ${selectedQuantity}`);
   
});
