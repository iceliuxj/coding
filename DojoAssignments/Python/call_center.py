class Call():
    def __init__(self, id, name, phonenumber, timeofcall, reason):
        self.id = id
        self.name = name 
        self.phonenumber = phonenumber
        self.timeofcall = time
        self.reason = reason
    
    def display(self):
        print self.id,self.name,self.phonenumber,self.timeofcall,self.reason

    
class CallCenter():
    def __init__(self):
        self.call_list = []

    def add(self, call):
        self.call_list.append(call)

    def remove(self):
        self.call_list.pop(self.call_list[0])

    def 