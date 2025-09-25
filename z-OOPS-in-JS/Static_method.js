//


class Animal {
    constructor (name) {
        this.name = name
    }
    walk () {
        console.log("Animal " + this.name + " is walking" );
    }
    static capitalize (name) {
        return name.charAt(0).toUpperCase() + name.substr(1, name.length) // Capitalizes and uppercase the 1st alphabet of letter monkey
    }
}

let j = new Animal (Animal.capitalize("monkey")) 
j.walk () 