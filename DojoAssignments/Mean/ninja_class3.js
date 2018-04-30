class Ninja {
    constructor(name){
        this.name = name;
        this.speed = 3;
        this.strength = 3;
        this.health = 100;
    }
    

    sayName(name){
        console.log(`My ninja name is ${this.name}`);
    }

   showStats(name){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
        console.log (this.health);
    }

    punch(ninja){
        ninja.health -= 5;
        console.log(`${ninja.name} was punched by ${this.name} and lost 5 Health!`);
    }

    kick(ninja){
        ninja.lostHealth = 15 * this.strength;
        console.log(`${ninja.name} was kicked by ${this.name} and lost ${ninja.lostHealth}!`);
    }
}

const ninja1 = new Ninja("Hyabusa");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
redNinja.punch(blueNinja);
blueNinja.kick(redNinja);

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.speed = 10;
        this.strength = 10;
        this.health = 200;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();