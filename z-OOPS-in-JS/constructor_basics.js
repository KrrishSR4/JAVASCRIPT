// constructor() method is called automatically by new, so we can initialize the object there.



function RailwayForm(name, trainNumber) { 
    this.name = name;
    this.trainNumber = trainNumber;

    this.run = function() {
        console.log("running");
    };

    this.display = function() {
        console.log("Passenger:", this.name, "| Train No:", this.trainNumber);
    };
}

let form1 = new RailwayForm("Krish", 12345);
form1.run();      
form1.display();  