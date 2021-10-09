const groceryForm = document.querySelector('form');
const groceryList = document.querySelector('#list');

groceryForm.addEventListener('submit', function(evt){
console.log("Item Added Successfully!");
evt.preventDefault();
const productInput = groceryForm.elements.product;
const quantityInput = groceryForm.elements.qty;

addItem(productInput.value, quantityInput.value)
productInput.value = '';
quantityInput.value = '';
})

const addItem = (product, quantity)=>{

    const newItem = document.createElement('li');
    newItem.append(`${quantity} ${product}`);
    groceryList.append(newItem);
}