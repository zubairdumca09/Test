// var obj = {
//     name: "Zubair",
//     age: 35,
//     "city name": ""
// }


// obj.name = "Junaid";
// obj["name"] = "Junaid1"
// obj["city name"] = "x";
// obj.address = "y"
// obj["address"] = "y"
// console.log(obj)

// {
//     name: "Junaid1",
//     age: 35,
//     "city name": "x",
//     address: "y"
// }

// function changeObj(keyName, value) {
//     obj[keyName] = value;
// }

// changeObj("name", "Rahul")
// changeObj("age", 35)
// changeObj("city name", "Noida")
// console.log(obj)



function changeWithObj(obj, key, value) {
    if ([obj[key]] !== undefined) {
        obj[key] = value;
    }
    console.log(obj)
}

const person = {
    name: {
        first: "Mohammad",
        second: "zubair"
    },
    address: {
        city: "Hamirpur"
    },
    age: 35
}
person["address"].city = "x"

changeWithObj(person.name, "first", {})
