def findChar(word_list, char):
    newlist = []
    for i in word_list:
        if char in i:
            newlist.append(i)
    print newlist

findChar(word_list=['hello','world','my','name','is','Anna'], char = 'o') 