//3a
//const allBrands = document.getElementById("list");

//inventory.map((inventory) => {
//    const newList = document.createElement("li")
//    newList.textContent = inventory.brand

//    return allBrands.appendChild(newList)
//})

function driebee () {
    const allBrands = document.getElementById("list");

    inventory.map((inventory) => {
        const newList = document.createElement("li");
        newList.textContent = inventory.brand;

        return allBrands.appendChild(newList);
    })
}
driebee(inventory);


