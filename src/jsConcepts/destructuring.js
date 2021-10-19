const person = {
    name: {
        first: "Mohammad",
        second: {
            x: {
                y: {
                    z: 10
                }
            }
        }
    },
    address: {
        city: "Hamirpur"
    },
    age: 35
}

const { name: { second: { x: { y: { z } } } }, address, age } = person

console.log(z);

const { first, second } = person.name;
const { city } = person.address


