(function () {
    /*
    * Interfaces
    */
    /*
    * Classes
    */
    //The traveler class that implements the ITraveler interface
    //This is currently in violation of its contract with the interface. 
    //Create the code required to satisfy the contract with the interface
    var Traveler = /** @class */ (function () {
        function Traveler(food, name, isHealthy) {
            this.food = food;
            this.name = name;
            this.isHealthy = isHealthy;
        }
        Traveler.prototype.getfood = function () {
            return this.food;
        };
        Traveler.prototype.setfood = function (food) {
            this.food = food;
        };
        Traveler.prototype.hunt = function () {
            if (Math.random() > .5) {
                this.food = this.food + 100;
            }
            return this.food;
        };
        Traveler.prototype.eat = function () {
            if (this.food >= 20) {
                this.food = this.food - 20;
            }
            else {
                this.isHealthy = false;
            }
            return this.isHealthy;
        };
        return Traveler;
    }());
    //The wagon class that implements the IWagon interface
    //This is currently in violation of its contract with the interface.
    //Create the code required to satisfy the contract with the interface 
    var Wagon = /** @class */ (function () {
        function Wagon(capacity, passengerArray) {
            this.capacity = capacity;
            this.passengerArray = passengerArray;
        }
        Wagon.prototype.isQuarantined = function () {
            for (var _i = 0, _a = this.passengerArray; _i < _a.length; _i++) {
                var traveler = _a[_i];
                if (!traveler.isHealthy) {
                    return true;
                }
            }
            return false;
        };
        Wagon.prototype.addPassenger = function (traveler) {
            if (this.passengerArray.length < this.capacity && Math.random() > .5) {
                this.passengerArray.push(traveler);
                return "added";
            }
            else {
                return "sorry";
            }
        };
        Wagon.prototype.getFood = function () {
            var sum = 0;
            for (var _i = 0, _a = this.passengerArray; _i < _a.length; _i++) {
                var passenger = _a[_i];
                sum += passenger.food;
            }
            return sum;
        };
        return Wagon;
    }());
    /*
    * Play the game
    *
    * Create 5 healthy travelers object with a random amount of food between 0 and 100 (inclusive)
    *
    * Create wagon with an empty passenger list and a capacity of 4.
    *
    * Make 3 of 5 the travelers eat by calling their eat methods
    *
    * Make the remaining 2 travelers hunt
    *
    * Create an array of your travelers, loop over the array of travelers and give each traveler a 50% chance
    * of attempting to be being added to the wagon using the wagons addPassenger method.
    *
    * Run the isQuarantined method for the wagon
    *
    * Run the getFood method for the wagon
    *
    * the return values of all the methods should be displayed in the console using console.log()
    * the console.log statements should not live inside any methods on the objects
    *
    */
    var wagon = new Wagon(4, []);
    var travelerA = new Traveler(Math.round(Math.random() * 100), "Howard", true);
    wagon.addPassenger(travelerA);
    travelerA.eat();
    console.log("Name: " + travelerA.name + " food: " + travelerA.food + " health status:" + travelerA.isHealthy);
    var travelerB = new Traveler(Math.round(Math.random() * 100), "Robin", true);
    wagon.addPassenger(travelerB);
    travelerB.eat();
    console.log("Name: " + travelerB.name + " food: " + travelerB.food + " health status:" + travelerB.isHealthy);
    var travelerC = new Traveler(Math.round(Math.random() * 100), "Fred", true);
    wagon.addPassenger(travelerC);
    travelerC.eat();
    console.log("Name: " + travelerC.name + " food: " + travelerC.food + " health status:" + travelerC.isHealthy);
    var travelerD = new Traveler(Math.round(Math.random() * 100), "Ronnie", true);
    wagon.addPassenger(travelerD);
    travelerD.hunt();
    console.log("Name: " + travelerD.name + " food: " + travelerD.food + " health status:" + travelerD.isHealthy);
    var travelerE = new Traveler(Math.round(Math.random() * 100), "JD", true);
    wagon.addPassenger(travelerE);
    travelerE.hunt();
    console.log("Name: " + travelerE.name + " food: " + travelerE.food + " health status:" + travelerE.isHealthy);
    console.log("Wagon total food: " + wagon.getFood());
    console.log("Total passengers in wagon: " + wagon.passengerArray.length);
    console.log("Passengers in wagon: " + wagon.passengerArray);
    console.log("Wagon is quarantied: " + wagon.isQuarantined());
})();
