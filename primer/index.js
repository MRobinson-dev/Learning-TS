// Javascript Primer - 4.4.2 Storing data by key using a map
// lisitng 4.23 Using symbol values as keys in the index.js file in the primer folder

class Product {
  constructor(name, price) {
    this.id = Symbol();
    this.name = name;
    this.price = price;
  }
}

class Supplier {
  constructor(name, productids) {
    this.name = name;
    this.productids = productids;
  }
}

let acmeProducts = [new Product("Hat", 100), new Product("Boots", 100)];
let zoomProducts = [new Product("Hat", 100), new Product("Boots", 100)];

let products = new Map();

[...acmeProducts, ...zoomProducts].forEach(p => products.set(p.id, p));
let suppliers = new Map();
suppliers.set("acme", new Supplier("Acme Co", acmeProducts.map(p => p.id)));
suppliers.set("zoom", new Supplier("Zoom Shoes", zoomProducts.map(p => p.id)));

suppliers.get("acme").productids.forEach(id => console.log(products.get(id).name));

