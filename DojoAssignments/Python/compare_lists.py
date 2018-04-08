def compareLists(list1, list2):
    if len(list1) != len(list2):
        print "The lists are not the same"  
        return False
           
    for i in range (0, len(list1)):
        if list1[i] != list2[i]:
            print "The lists are not the same"  
            return False

    print "The lists are the same"  
    return True

compareLists(list1 = ['celery','carrots','bread','milk'], list2 = ['celery','carrots','bread','cream'])
 
