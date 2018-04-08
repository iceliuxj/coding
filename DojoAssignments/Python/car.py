class Car():
    def __init__(self, price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        
        if self.price > 10000:
            self.tax = 0.15
        else:
            self.tax = 0.12
    
    def display_all(self):
        print "Price: " , self.price
        print "Speed: " , self.speed
        print "Fuel: " , self.fuel
        print "Mileage: " , self.mileage
        print "Tax: ", self.tax

    # def display_all_str(self):
    #     return "Price: " + str(self.price) + "\n" + \
    #            "Speed: " + str(self.speed) + "\n" + \
    #            "Fuel: " + str(self.fuel) + "\n" + \
    #            "Mileage: " + str(self.mileage) + "\n" + \
    #            "Tax: "+ str(self.tax)
        
        
car1=Car(2000,'35mph','Full', '15mpg')
car2=Car(2000,'5mph','Not Full', '105mpg')
car3=Car(2000,'15mph','kind of Full', '95mpg')
car4=Car(200000,'35mph','Empty', '15mpg')

car1.display_all_str()
car2.display_all()
car3.display_all()
car4.display_all()