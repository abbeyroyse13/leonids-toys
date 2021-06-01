const toyToFind = 2

const toys = [{
        id: 1,
        type: "teddy bear",
        manufacturer: "Leonid's Toys",
        texture: "soft",
        size: "15 in",
        price: 25
    },
    {
        id: 2,
        type: "doll",
        manufacturer: "Leonid's Toys",
        texture: "hard",
        size: "18 in",
        price: 30
    },
    {
        id: 3,
        type: "toy train",
        manufacturer: "Leonid's Toys",
        texture: "rough",
        size: "3 ft",
        price: 45
    }
]

const fakeFood = {
    id: 4,
    type: "fake food",
    manufacturer: "Leonid's Toys",
    texture: "squishy",
    size: "7 in",
    price: 10
}

const car = {
    id: 5,
    type: "toy car",
    manufacturer: "Leonid's Toys",
    texture: "hard",
    size: "10 in",
    price: 15
}

// console.log(toys);

// for (const toy of toys) {
//     console.log(`The type of toys are ${toy.type}`)
// }

toys.push(fakeFood);

toys.push(car);

// for (const toy of toys) {
//     toy.price = toy.price + 6.10

//     console.log(`The toy maker is ${toy.manufacturer}. His toys all have different textures such as ${toy.texture} and different sizes such as ${toy.size}. The new price of his toys (depending on the product) are ${toy.price}`)
// }

// for (const toy of toys) {
//     if (toy.id === toyToFind) {
//         toy.price = toy.price + 6.10
//         console.log(`The toy maker is ${toy.manufacturer}. His toys all have different textures such as ${toy.texture} and different sizes such as ${toy.size}. The new price of his toys (depending on the product) are ${toy.price}`)
//     }
// }

const addToyToShop = (newToy) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1

    newToy.id = idForNewToy
    toys.push(newToy)
}

const plushie = {
    type: "clown plush",
    manufacturer: "Leonid's Toys",
    texture: "soft",
    size: "20 in",
    price: 25
}

addToyToShop(plushie);

console.log(toys);