let storedProducts;
let toAppend = {
    id: 0, 
    name: 'Test Item', 
    price: 3.00, 
    quantity: 'EA'};

// Create if not exists
if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify([toAppend]));
}

export class NewProduct {
    constructor(productName, productPrice, productQuantity) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productQuantity = productQuantity;
    }
    method() {
        toAppend = {
            id: JSON.parse(localStorage.getItem('products').length),
            name: this.productName,
            price: this.productPrice,
            quantity: this.productQuantity
        }

        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(toAppend);
        localStorage.setItem('products', JSON.stringify(products));

        location.reload();
    }
}

export { storedProducts }