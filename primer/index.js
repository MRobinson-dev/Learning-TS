// Javascript Primer - 4.5 Using Modules - 4.5.1 Declaring the Module Type
// lisitng 4.25 Setting the module type in the package.json file - 4.29 named export

import {calculateTax} from './tax.js';

class Product {
  constructor(name, price) {
    this.id = Symbol();
    this.name = name;
    this.price = price;
  }
}

let product = new Product("Hat", 100);
 
let taxedPrice = calculateTax(product.price);
console.log(`Name: ${product.name}, Taxed Price: ${taxedPrice}`);