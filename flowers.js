const flowers = [
{
    id: 1,
    color: "White",
    species:"Rose",
    price: 0.90
},

{
    id: 2,
    color:"Red",
    species:"Tulip",
    price: 1.10
}
]

const dandelion = {
    color: "Yellow",
    species: "Common catsear",
    price: 30.01
}


const addFlower = (flowerObject) => {
    const lastIndex = flowers.length - 1
    const currentLastFlower = flowers[lastIndex]
    const maxId = currentLastFlower.id
    const idForNewFlower = maxId + 1

  flowerObject.id = idForNewFlower
    flowers.push(flowerObject)
};

for (const flower of flowers){
    console.log(`The ${flower.species} is ${flower.color} and costs ${flower.price} dollars. ${flower.id}`)
};


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code

    for (const flower of flowers) {
        if (flower.price >= 1) { 
            expensiveFlowers.push(flower)
            }
        }
     return expensiveFlowers  // Do not change this code
}

console.log(findExpensiveFlowers());


// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}