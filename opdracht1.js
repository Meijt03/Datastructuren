//1a dmv de map sort method ga ik het type uit de array halen
const nameOutcome = inventory.map ((inventory) => {
    return inventory.name;
});
console.log(nameOutcome);

//1b dmv de filter ga ik de de volgende 2 objecten vergelijken. original stock en sold, als deze gelijk zijn dan betekend het dat ze uitverkocht zijn en moeten ze in de console komen
const soldOutcome = inventory.filter((inventory) => {
    return (inventory.originalStock === inventory.sold);
});
console.log(soldOutcome);

//1c dmv de filter ga ik al de ambilight tv's weergeven (gehele object)
const ambilightOutcome = inventory.filter((inventory) => {
    return (inventory.options.ambiLight === true);
});
console.log(ambilightOutcome);

//1d ik ga dmv de sort method de objecten sorteren op prijs
const priceOutcome = inventory.sort((a,b) =>{
    if (a.price > b.price){
        return 1;
    }
    else if (a.price < b.price){
        return -1;
    }
    else return 0;
})
console.log(priceOutcome);