class Call():
    def __init__(self, id, name, phonenumber, timeofcall, reason):
        self.id = id
        self.name = name 
        self.phonenumber = phonenumber
        self.timeofcall = timeofcall
        self.reason = reason
    
    def display(self):
        print self.id,self.name,self.phonenumber,self.timeofcall,self.reason

    
class CallCenter(object):
    def __init__(self):
        self.call_list = []

    def add(self, call):
        self.call_list.append(call)
        return self

    def remove(self):
        self.call_list.pop(self.call_list[0])
        return self

    def info(self):
        for item in self.call_list:
            print item.name,item.phonenumber
        print len(self.call_list)
        return self

call1=Call(1, "bryant", 13123123, 30, "information")
call2=Call(2,"john", 263747, 20,"payment")
call3=Call(3,"Kate", 257287, 28,"order")
CallCenter.add(call1).add(call2).info()