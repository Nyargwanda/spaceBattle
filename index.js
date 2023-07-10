class Ship {
    constructor (shiphull, firepower, accuracy){
        this.shiphull = shiphull
        this.firepower = firepower
        this.accuracy = accuracy
    }
    fire(target){
        if(Math.random() < this.accuracy){
            target.shiphull -= this.firepower;
        }
    }
  }
  let maverick = new Ship (20, 5, .7)
  console.log(maverick);
  // creating sub class extending from parent class and changing the valeus of the same parameters
  // class Aliens extends Ship {
  //     constructor() {
  //         super(Math.floor(Math.random()*(7-3))+3, Math.floor(Math.random()*(5-2))+2, (Math.random()*(.8-.6))+.6);
  //     }
  //     }
  // Creating another class with the same parameters but different values
  class Aliens {
    constructor () {
        this.ships = []
    }
    addAliens (){
        this.shiphull = Math.round(Math.random()*(6-3) + 3) // enemy hull is between 3 and 6
        this.firepower = Math.round(Math.random()*(4-2) + 2) // enemy firepower is between 2 and 4
        this.accuracy = Math.round(Math.random()*(.12 - .6) + .2) //enemy accuracy is between .6 and .8
        this.ships.push (new Ship (this.shiphull, this.firepower, this.accuracy));
    }
  }
  let enemyAliens = new Aliens();
  enemyAliens.addAliens();
  enemyAliens.addAliens();
  enemyAliens.addAliens();
  enemyAliens.addAliens();
  enemyAliens.addAliens();
  enemyAliens.addAliens();
  // console.log(enemyAliens);
  //Attack
  const attackAliens = () =>{
      let enemyFleet = enemyAliens.ships;
      console.log(enemyFleet);
      for (let i=0; i<enemyAliens.ships.length; i++){
          // need to check if our ship is destroyed, if destroyed then gameover, if not keep fighting
          if (maverick.shiphull <= 0) {
              console.log("Game Over, your ship has been destroyed");
              break;
          }
          while (maverick.shiphull > 0 || enemyFleet[i].shiphull > 0){
              if (Math.random() < maverick.accuracy){
                  enemyAliens.ships[i].shiphull = enemyAliens.ships[i].shiphull - maverick.firepower
              }
              // need to check if enemy alien ship is destroyed, if yes then break and go to the next ship and restart battle
              if (enemyAliens.ships[i].shiphull <= 0) {
                  console.log("Hoorayy enemy Alien had been destroyed");
                  break;
              }
          if(Math.random() < enemyAliens.ships[i].accuracy){
            maverick.shiphull = maverick.shiphull - enemyAliens.ships[i].firepower
          }
          if (maverick.shiphull <=0) {
            console.log('game over, your ship has been destroyed');
            break;
          }
          }
          }
          }
          //Add button click
          const startButtonClick = () => {
            attackAliens()
            console.log(maverick);
          };

          //Button from html
          const startButton = document.getElementById("startButton");
          startButton.addEventListener("click", startButtonClick)
          