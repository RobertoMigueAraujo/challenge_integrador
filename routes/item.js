const add = document.querySelector('#add');
const substract = document.querySelector('#substract');
const quantity  = document.querySelector('#quantity');
console.log(add, substract, quantity);
add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
substract.addEventListener('click', () => {
    quantity.value = Number(quantity.value) - 1});
