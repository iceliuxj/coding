class Animal(object):
    def __init__(self, name, health):
        self.name = name
        self.health = health
    
    def walk(self):
        self.health += 1
        return self
    
    def run(self):
        self.health -= 1
        return self

    def displayhealth(self):
        print self.health
        return self

animal1=Animal('panda', 100)
animal1.walk().walk().walk().walk().run().displayhealth()

class Dog(Animal):
    def __init__(self, name):
        super(Dog,self).__init__(name,150)

    def pet(self):
        self.health += 5
        return self

dog1=Dog('dog1')
dog1.walk().walk().walk().walk().walk().run().run().pet().displayhealth()

class Dragon(Animal):
    def __init__(self, name):
        super(Dragon,self).__init__(name,170)
    
    def __str__(self):
        return "This is a %s" % self.name
    
    def fly():
        self.health -= 10
        return self

dragon = Dragon("dragon")
print str(dragon.displayhealth())

animal2=Animal("frog",20)
# testline: animal2.walk().walk().displayhealth()