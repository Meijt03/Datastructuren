//opdracht2a dmv een forloop tel ik de sold waardes bij elkaar op in een variabele


let sold = 0;
for (let i = 0; i < inventory.length; i++) {
    sold = sold + inventory[i].sold};

console.log(sold);

//opdracht 2b
const soldTelevisions = document.getElementById("container");

const soldTelevisionsTitle = document.createElement("h3");
soldTelevisionsTitle.textContent = "Aantal verkochte televisies";

const allSoldTelevisions = document.createElement("h4");
allSoldTelevisions.textContent = sold;

soldTelevisions.append(soldTelevisionsTitle);
soldTelevisions.append(allSoldTelevisions);

//2c en 2d
let bought = 0;
for (let i = 0; i < inventory.length; i++) {
    bought = bought + inventory[i].originalStock};

console.log(bought);

const boughtTelevisions = document.getElementById("container2");

const boughtTelevisionTitle = document.createElement("h3")
boughtTelevisionTitle.textContent = "Aantal ingekochte televisies";

const allBoughtTelevisions = document.createElement("h4")
allBoughtTelevisions.textContent = bought;

boughtTelevisions.append(boughtTelevisionTitle);
boughtTelevisions.append(allBoughtTelevisions);

//2e
const currentStock = document.getElementById("container3");

const currentStockTitle = document.createElement("h3")
currentStockTitle.textContent = "Te verkopen televisies";

const currentStockTotal = document.createElement("h4")
currentStockTotal.textContent = bought - sold;

currentStock.append(currentStockTitle);
currentStock.append(currentStockTotal);