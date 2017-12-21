(function(){
    
        /*
        * Interfaces
        */
    
        //interface describing what attributes and methods a traveler should have
        interface ITraveler {
            food: number;
            name: string;
            isHealthy: boolean;
    
            //when implemented, There should be 50% chance to increase the traveler's food by 100.
            //return the travelers new food value
            hunt(): number;
    
            //when implemented, we should check to see if the traveler has a food supply of 20
            //If they do then we should consume 20 of the available food supply
            //If they don't have 20 food then we should change isHealthy to false
            //return the travelers health after attempting to eat
            eat(): boolean;
    
    
        }
    
        //interface describing attributes and methods a wagon should have
        interface IWagon{
            capacity: number;
            passengerArray: Traveler[];
    
            //when implemented, we should add the traveler to the wagon if the capacity permits
            //this function should return the string "added" on success and "sorry" on failure
            addPassenger(traveler: Traveler): string;
    
            //this should return true if there is at least one unhealthy person in the wagon
            //if everyone is healthy false should be returned
            isQuarantined(): boolean;
    
            //Return the total amount of food among all passengers of the wagon.
            getFood(): number;
    
        }
    
        /*
        * Classes
        */
    
        //The traveler class that implements the ITraveler interface
        //This is currently in violation of its contract with the interface. 
        //Create the code required to satisfy the contract with the interface
        class Traveler implements ITraveler {

            food: number;
            name: string;
            isHealthy: boolean;

            constructor(food: number, name: string, isHealthy: boolean) {
                this.food = food;
                this.name = name;
                this.isHealthy = isHealthy;
            }
     
            getfood(): number {
                return this.food;
            }
            setfood(food:number): void {
                this.food = food;
            }
            hunt(): number {
                if (Math.random()>.5) {
                    this.food = this.food + 100;
                }
                return this.food;
            }
            eat(): boolean {
                if (this.food >= 20) {
                    this.food = this.food - 20;
                } else {
                    this.isHealthy = false;
                }
                return this.isHealthy;
            }
            
        }
    
        //The wagon class that implements the IWagon interface
        //This is currently in violation of its contract with the interface.
        //Create the code required to satisfy the contract with the interface 
        class Wagon implements IWagon {

            capacity: number;
            passengerArray: Traveler[]

            constructor(capacity: number, passengerArray: Traveler[]) {
                this.capacity = capacity;
                this.passengerArray = passengerArray;
            }

            isQuarantined(): boolean {
                for (let traveler of this.passengerArray) {
                    if (!traveler.isHealthy) {
                        return true;
                    }
                }
                return false;
            }
            addPassenger(traveler:Traveler): string {
                if (this.passengerArray.length < this.capacity && Math.random()>.5) {
                    this.passengerArray.push(traveler)
                    return "added"
                }
                else {
                return "sorry";
            }
        }
            
            getFood(): number {
                let sum: number = 0;
                for(let passenger of this.passengerArray) {
                    sum += passenger.food
                    
                }
                return sum;

            }
    
        }
    
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

        const wagon = new Wagon (4,[] );

        const travelerA = new Traveler (Math.round(Math.random() *100),"Howard",true);
        wagon.addPassenger(travelerA)
        travelerA.eat();
        console.log(`Name: ${travelerA.name} food: ${travelerA.food} health status:${travelerA.isHealthy}`) 

        const travelerB = new Traveler (Math.round(Math.random() *100),"Robin",true);
        wagon.addPassenger(travelerB)
        travelerB.eat();
        console.log(`Name: ${travelerB.name} food: ${travelerB.food} health status:${travelerB.isHealthy}`) 


        const travelerC = new Traveler (Math.round(Math.random() *100),"Fred",true);
        wagon.addPassenger(travelerC)
        travelerC.eat();
        console.log(`Name: ${travelerC.name} food: ${travelerC.food} health status:${travelerC.isHealthy}`) 


        const travelerD = new Traveler (Math.round(Math.random() *100),"Ronnie",true);
        wagon.addPassenger(travelerD)
        travelerD.hunt();
        console.log(`Name: ${travelerD.name} food: ${travelerD.food} health status:${travelerD.isHealthy}`)


        const travelerE = new Traveler (Math.round(Math.random() *100),"JD",true);
        wagon.addPassenger(travelerE)
        travelerE.hunt();
        console.log(`Name: ${travelerE.name} food: ${travelerE.food} health status:${travelerE.isHealthy}`)

        console.log(`Wagon total food: ${wagon.getFood()}`)

        console.log(`Total passengers in wagon: ${wagon.passengerArray.length}`)

        console.log(`Passengers in wagon: ${wagon.passengerArray}`)

        console.log(`Wagon is quarantied: ${wagon.isQuarantined()}`)


    
    })();
    
    