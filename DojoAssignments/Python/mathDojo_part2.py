class Mathdojo():
    def __init__(self,val):
        self.val = 0

    def add(self,*num):
        for item in num:
            if type(item) == list:
                for i in range(0,len(item)):
                    self.val += item[i]
            else:
                self.val += item
        return self

    def subtract(self,*num):
        for item in num:
            if type(item) == list:
                for i in range(0,len(item)):
                    self.val -= item[i]
            else:
                self.val -= item
        return self
    
    def result(self):
        print self.val
        return self

md=Mathdojo(0)
md.add([1], 3,4).add([3,5,7,8], [2,4.3,1.25]).subtract(2, [2,3], [1.1,2.3]).result()
