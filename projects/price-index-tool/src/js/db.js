let storedProducts;

export class NewProduct {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    method() {
        const toAppend = {
            id: crypto.randomUUID(),
            name: this.name,
            price: this.price,
            quantity: this.quantity
        }

        // Create if not exists
        if (!localStorage.getItem('products')) {
            localStorage.setItem('products', JSON.stringify([toAppend]));
        }
        else {
            const products = JSON.parse(localStorage.getItem('products')) || [];
            products.push(toAppend);
            localStorage.setItem('products', JSON.stringify(products));
        }

        
        location.reload();
    }
}

export { storedProducts }