//A class is a blueprint for creating objects with specific properties and methods
//An object is an instance of a class — it holds actual data and behavior.


class RailwayForm {
    submit() {
        console.log("Form Submitted");
    }
    cancel() {
        console.log("This Form is Cancelled");
    }
}

let krish = new RailwayForm()
let krrish = new RailwayForm()

krish.submit()
krrish.submit()
krrish.cancel()