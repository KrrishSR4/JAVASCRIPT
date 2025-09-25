// extends keyword is used to extend another class

class Animal  {
    constructor(name) {
        this.name = name;
    }
    run(speed) {
        console.log(`${this.name} runs at ${speed} km/hr`)
    }
}
class Monkey extends Animal {
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let monkey = new Monkey ("Krrish")
    monkey.run(7);
    monkey.hide();


    