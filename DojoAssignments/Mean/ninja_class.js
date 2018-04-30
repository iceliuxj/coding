function Ninja(name){
    this.name = name;
    this.speed = 3;
    this.strength = 3;
    this.health = 100;

    this.sayName = function(name){
        console.log("My ninja name is" + this.name + "!")
    }

    this.showStats = function(name){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed:" + this.speed + ", Strength:" + this.strength)
    }

    this.drinkSake = function(){
        this.health += 10;
        console.log (this.health)
    }
}

var ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();