class Product():
    def __init__(self, price, name, weight, brand):
        self.price = price
        self.name = name
        self.weight = weight
        self.brand = brand
        self.status = 'for sale'
    
    def sell(self):
        self.status = 'sold'
        return self

    def addTax(self,tax):
        self.price = self.price * (1+tax)
        return self
       
    def returnFunc(self,reason):
        if reason == 1: # 1 stands for defective
            self.status = 'defective'
            self.price = 0
        if reason == 2: # 2 stands for 'returned in box, like new':
            self.status = 'for sale'
        if reason == 3: # 3 stands for "in opened box"
            self.status = 'used'
            self.price = self.price * (1-0.2)
        return self
    
    def displayInfo(self):
        print self.price, self.name, self.weight,self.brand, self.status

product1=Product(200,"radio", "1kg", "Shark")
product1.sell().displayInfo()
product1.returnFunc(1).displayInfo()

