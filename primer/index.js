// Javascript Primer - 4.4.2 Storing data by key using a map
// lisitng 4.22 Using a map in the index.js file in the primer folder

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

let data = new Map();
data.set("Hat", new Product("Hat", 100));
data.set("Boots", new Product("Boots", 100));

[...data.keys()].forEach(key => console.log(data.get(key).toString()));