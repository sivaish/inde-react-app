
class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hi - I'M ${this.name} - ${this.age} years(s) old!`
    }

    getDetails() {
        return `${this.age} years(s) old ${this.name}`
    }
}

class Student extends Person {
    // Overrider constructor function
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }

    getGreeting() {
        let description = super.getGreeting()

        if(this.major) {
            description += ` The major is ${this.major}.`
        }

        return description
    }

}

class Traveler extends Person {
    constructor(name, age, major, location) {
        super(name, age, major)
        this.location = location
    }

    getGreeting(){
        let locatioDescription = super.getGreeting()

        if(this.location){
            locatioDescription += ` I'm visiting from ${this.location}`
        }

        return locatioDescription
    }
}

const me = new Traveler('Siva Selvaraj', 32, 'CSE', 'Melbourne')
console.log(me.getGreeting());

const other = new Traveler()
console.log(other.getGreeting());




