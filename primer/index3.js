let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

if (hatPrice == bootsPrice) {
  console.log("prices are the same");
} else {
  console.log("Prices are different");
}

if (hatPrice === bootsPrice) {
  console.log("prices are the same");
} else {
  console.log("Prices are different");
}

//let totalPrice = hatPrice + Number(bootsPrice);
//console.log(`Total Price: ${totalPrice}`);

let firstCity;
let secondCity = firstCity || "London";
console.log(secondCity);

let sumPrices = (...numbers) => numbers.reduce((total, val) =>
  total + (Number.isNaN(Number(val)) ? 0 : Number(val)));


let totalPrice = sumPrices(hatPrice, bootsPrice, "bob");
console.log(`Total Price: ${totalPrice}`);