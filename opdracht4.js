//4a
function tvName() {
    return inventory[0].brand + ' ' + inventory[0].type + '-' + inventory[0].name;
}

console.log(tvName())

//4b
function getPrice() {
    return "€" + inventory[0].price + ',-';
}

console.log(getPrice())

//4c

let sizes = "";
function getAvailableSizes(tv) {


    for (let i = 0; i < tv.availableSizes.length; i++) {
        const inch = tv.availableSizes[i];
        const cm = tv.availableSizes[i] * 2.54;

        sizes = sizes + inch + "inch" + "(" + cm + "cm" + ")";

        if (i < tv.availableSizes.length - 1) {
            sizes = sizes + " | ";
        }
    } return sizes;

}
const outcome = getAvailableSizes(inventory[3]);
console.log(outcome);

//4d
const TelevisionDetail = document.getElementById("container5");

const televisionNameTitle = document.createElement("h4");
televisionNameTitle.textContent = tvName();
const televisionPriceTitle = document.createElement("h4");
televisionPriceTitle.textContent = getPrice();
const televisionSizeTitle = document.createElement("h4");
televisionSizeTitle.textContent = outcome

TelevisionDetail.append(televisionNameTitle)
TelevisionDetail.append(televisionPriceTitle)
TelevisionDetail.append(televisionSizeTitle)

//4e  helaas haak ik hier af ;-)
//function televisionList(tv) {
  //  const tvList = document.getElementById("container5")

    //const televisionNameTitleTwo = document.createElement("h4");
    //televisionNameTitleTwo.textContent = tvName()
    //const televisionPriceTitleTwo = document.createElement("h4");
    //televisionPriceTitleTwo.textContent = getPrice()
    //const televisionSizeTitleTwo = document.createElement("h4");
    //televisionSizeTitleTwo.textContent = outcome

   // TelevisionDetail.append(televisionNameTitleTwo)
 //  TelevisionDetail.append(televisionPriceTitleTwo)
  //  TelevisionDetail.append(televisionSizeTitleTwo)
//}



