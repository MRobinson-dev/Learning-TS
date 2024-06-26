// Javascript Primer - 4.5 Using Modules - 4.5.4 Exporting and Importing Named features from Modules
// lisitng 4.30 Exporting named and default features

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