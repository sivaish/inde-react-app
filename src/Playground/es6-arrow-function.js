//  argument object - no longer nound with arrow function - Only with ES5 functions


const add = function (a, b) {
    console.log(arguments);
    return a + b 
}

// const add = (a, b) => {
//     console.log(arguments);
//     return a + b 
// }

console.log(add(55, 1, 10001));

// this keyword - no longer bound with arrow function

const user = {
    name: 'Siva',
    cities: ['Coimbatore', 'Melbourne', 'Bangalore'],
    printPlacesLived() {
        console.log(this.name)
        console.log(this.cities)

        this.cities.forEach( (city) => {
            console.log(this.name + ' has lived in ' +city )
        })
    }
}

user.printPlacesLived()

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 20,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number)
    }
}

console.log(multiplier.multiply());
