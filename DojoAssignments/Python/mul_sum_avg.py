# Multiple 
# Part I 
new_list = []
for x in range(0,1001):
    if x%2 == 1:
        new_list.append(x)
    print new_list

# part II original range is 5 to 1,000,000. In order to test program quickly, changed the range up to 1,000
new_list = []
for x in range (5, 1001):
    if x%5 == 0:
        new_list.append(x)
    print new_list

# sum list
sum = 0
a = [1,2,5,10,255,3]
for x in a:
    sum += x
print sum

# average list
sum = 0
a = [1,2,5,10,255,3]
for x in a:
    sum += x
    avg = sum/len(a)
print avg

