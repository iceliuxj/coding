class Card{
	constructor(suit,value,face){
		this.suit=suit;
		this.value=value;
		this.face=face;
	}
}
class Deck{
	constructor(){
		this.cards=[];
		this.reset();
	}
	reset(){
		this.cards=[];
		let suits=["Club","Diamond","Heart","Spade"];
		let cardInfo={
			"Ace":1,
			"Two":2,
			"Three":3,
			"Four":4,
			"Five":5,
			"Six":6,
			"Seven":7,
			"Eight":8,
			"Nine":9,
			"Ten":10,
			"Jack":11,
			"Queen":12,
			"King":13
		}
		for(let suit of suits){
			for(let info in cardInfo){
				let newCard=new Card(suit,cardInfo[info],info);
				this.cards.push(newCard);
				console.log(newCard);
			}
		}
	}
	shuffle(){
		for (let i=(this.cards.length-1);i>0;i--){
			let rdx=Math.floor(Math.random()*52);
			let temp=this.cards[rdx];
			this.cards[rdx]=this.cards[i]
			this.cards[i]=temp;
		}
	}
	deal(){
		return this.cards.shift();
	}
}
class Player{
	constructor(name){
		this.name=name;
		this.hand=[];
	}
	takeACard(targetDeck){
		let newCard=targetDeck.deal();
		this.hand.push(newCard);
	}
	discard(idx){
		idx=idx % this.hand.length;
		return this.hand.splice(this.hand[idx]);
	}
}
let bob=new Deck();
let rob=new Player("Rob");
rob.takeACard(bob);
console.log(rob)