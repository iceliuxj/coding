#1 odd/even: original range is from 1 to 2000. In order to test the program, changed the range upto 11.
def oddEven():
    for x in range(1,11):
        if x%2 == 0:
            print "Number is",x, ". This is an even number."
        else:
            print "Number is",x, ". This is an odd number."

oddEven()

#2 multiply
def multiply(arr,num):
    for x in range(0,len(arr)):
        arr[x] *= num
    print arr
multiply([2,4,10,16],5)








