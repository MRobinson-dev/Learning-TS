// using classes in JavaSCript 4.15
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  toString() {
    return `toSTring: Name: ${this.name}, Price: ${this.price}`;
  }
}


class TaxedProduct extends Product {
  constructor(name, price, taxRate = 1.2) {
    super(name, price);
    this.taxRate = taxRate;
  }

  getPriceIncTax() {
    return Number(this.price) * this.taxRate;
  }
  
  toString() {
    let chainResult = super.toString();
    return `${chainResult}, ${this.#getDetail()}`
  }

  #getDetail() {
    return `Tax: ${this.getPriceIncTax()}`;
  }

}

let hat = new TaxedProduct("Hat", 100);
let boots = new TaxedProduct("boots", 100, 1.3);

console.log(hat.toString());
console.log(boots.toString());

console.log(boots.#getDetail());

