class Card{
    constructor(type, value){
        this.type = type;
        this.value = value;
}

class Deck{
    constructor(){
        this.cards = [];
        this.reset();
    }

    reset(){
        this.cards = [];
        let types = ['diamonds', 'spades', 'hearts','clubs'];
        let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        for (let i = 0; i < types.length; i++){
            for (var x = 0; x < values.length; x++){
                let card = types[i]+ "-" + values[x];
                this.cards.push(card);
            }
        }
    }

    shuffle(){
        for (let i = 0; i < this.cards.length; i++){
            let rand=Math.floor(Math.random()*52);
            let temp=this.cards[rand];
            this.cards[rand]=this.cards[i];
            this.cards[i]=temp;
        }  
    }

    deal(){
        return this.cards.shift();
    }
}

// let deck1 = new Deck();



