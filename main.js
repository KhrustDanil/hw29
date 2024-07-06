class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    infoUser() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}


class Car {
    constructor(marka, model, year, number) {
        this.marka = marka;
        this.model = model;
        this.year = year;
        this.number = number;
    }

    owner;

    addOwner(person) {
        if(person.age >= 18) {
            this.owner = person;
        } else {
            console.log(`${person.name} are not 18 years old!`);
        }
    }

    infoCar() {
        console.log(`Marka: ${this.marka}, Model: ${this.model}, Year: ${this.year}>, Car number: ${this.number}`);

        if(this.owner) {
            console.log('Owner: ');
            this.owner.infoUser();
        }
    }
}

const personDanil = new Human('Danil', 18);
const personSerge = new Human('Serge', 32);

const carToyota = new Car('Toyota', 'Camry', 2024, 'ABC123');
const carWag = new Car('Volkswagen', 'Tiguan', 2019, 'DEF456');

carToyota.addOwner(personSerge);
carToyota.infoCar();

carWag.addOwner(personDanil);
carWag.infoCar();

