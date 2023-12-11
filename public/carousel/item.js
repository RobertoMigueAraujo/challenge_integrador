// Seleccionar los elementos del DOM
const add = document.querySelector('#add');
const substract = document.querySelector('#substract');
const quantity = document.querySelector('#quantity');
const addToCartBtn = document.querySelector('.item--submit'); // Seleccionar el botón "Agregar al Carrito"

console.log(add, substract, quantity, addToCartBtn);

// Incrementar la cantidad al hacer clic en el botón de suma (+)
add.addEventListener('click', () => {
    quantity.value = Number(quantity.value) + 1;
});

// Decrementar la cantidad al hacer clic en el botón de resta (-)
substract.addEventListener('click', () => {
    if (Number(quantity.value) > 0) {
        quantity.value = Number(quantity.value) - 1;
    }
});

// Acción al hacer clic en el botón "Agregar al Carrito"
addToCartBtn.addEventListener('click', () => {
    const selectedQuantity = Number(quantity.value);
    console.log(`Cantidad seleccionada para agregar al carrito: ${selectedQuantity}`);
    // Lógica para agregar el producto al carrito o redirigir al usuario a la página del carrito
});