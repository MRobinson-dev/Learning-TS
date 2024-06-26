// Javascript Primer - 4.3.2 Defining Iterable Objects
// lisitng 4.21 - Using an object as a Collection

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  toString() {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  }
}

let data = {
  hat: new Product("Hat", 100)
}

data.boots = new Product("Boots", 100);

Object.keys(data).forEach(key => console.log(data[key].toString()));