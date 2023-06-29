class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
    }
    fire(target){
        if(Math.random() < this.accuracy){
            target.shiphull -= this.firepower;
        }
    }
}
const USSAssembly = new Ship (20, 5, .7)
console.log(USSAssembly);

//creating another class with the same parameters but differency values
class Aliens {
    constructor () {
        this.ships = []
    }

    addAliens (){
        this.shiphull = Math.round(Math.random()(6-3) + 3) // enemy hull is between 3 and 6
        this.firepower = Math.round(Math.random()(4-2) + 2) // enemy hull is between 2 and 4
        this.accuracy = Math.round(Math.random()(.12-.6) + .2) // enemy hull is between .6 and .8
        this.ships.push (new Ship (shiphull, firepower, accuracy));

    }
    
}
// random number 1-20
// var randomNumber = Math.Floor(Math.random()*20)+1;
// console.log("number is", randomNumber);