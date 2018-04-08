def printCheckboard():
    # set i as row
    for i in range(0,8):
        if i%2 == 0:
            print "* * * *"
        else:
            print " * * * *"
            
printCheckboard()