class Bike {
    price: string;
    speed: string;
    miles: number;   
    constructor(price:string, speed:string, miles:number) {
        this.price = price;
        this.speed = speed;
        this.miles = 0
    }
    display() {
        console.log(this);
        return this;
    }

    ride() {
        this.miles += 10;
        console.log(this.miles);
        return this;
    }

    reverse() {
        this.miles -= 5;
        return this;
    }
}

let bike1 = new Bike("200","25mph",0);
let bike2 = new Bike("220","15mph",0);
let bike3 = new Bike("250","20mph",0);

bike1.ride().ride().ride().reverse().display();
bike2.ride().ride().reverse().reverse().display();
bike3.reverse().reverse().reverse().display();