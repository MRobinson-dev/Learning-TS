// using classes in JavaSCript 4.11
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  toString() {
    return `toSTring: Name: ${this.name}, Price: ${this.price}`;
  }
}

let hat = new Product("Hat", 100);
let boots = new Product("Boots", 100);

console.log(hat.toString());
console.log(boots.toString());