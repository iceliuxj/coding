def typeList(a):
    sum = 0
    newstr = ""
    isint = False
    isstr = False
    for x in a:
        if isinstance(x, int) or isinstance(x, float):
            sum += x
            isint = True
    
        elif isinstance(x, basestring):
            newstr += " " + x
            isstr = True
            

    if isint == True and isstr == True:
        print "The list you entered is of mixed type"
        print "String:" + newstr
        print "Sum: " + str(sum)
    elif isint == True:
        print "The list you enter is of integer type"
        print "Sum: " + str(sum)
    elif isstr == True:
        print "The list you enter is of string type"
        print "String:" + newstr
    
    
# typeList (['magical','unicorns'])
typeList (['magical unicorns',19,'hello',98.98,'world'])    