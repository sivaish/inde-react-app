var nameVar = 'Siva'
var nameVar = 'Mike'
console.log('nameVar', nameVar)

let nameLet = 'CVA'
nameLet = 'Jimmy'
console.log('nameLet', nameLet);


const nameConst = 'Rij'
console.log(nameConst);

const square = function (x) {
    return x * x
}

console.log(square(5))

const squareArrow = (x) => x *x 

console.log(squareArrow(9));


//  arrow functions

const fullName = 'Siva Selvaraj'

if(fullName) {
    let firstName = fullName.split(' ')[0]
    console.log(firstName);
}

const firstN = (fullN) => fullName.split(' ')[0]

console.log('First Name is : ' +firstN('Siva Selvaraj'));
