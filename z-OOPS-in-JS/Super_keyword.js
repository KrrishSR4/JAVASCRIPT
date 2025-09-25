//The super keyword in JavaScript is used to access and call methods from a parent class inside a child class.


class Employee {
    login () {
        console.log(`Employee has logged in`);
    }
    logout () {
        console.log(`Employee has logged out`);
    }
    requestleaves (leaves) {
        console.log(`Employee has ${leaves + 1} leaves`);
    }
}

class Developer extends Employee {
    requestCoffee (x) {
        console.log(`Employee has requested ${x} coffee`);
    }
    requestleaves (leaves) {
        super.requestleaves(4)
        console.log("One extra is granted")
    }
}

let e = new Developer  ()
e.login();
e.requestleaves(4);
e.requestCoffee(2);
e.logout();