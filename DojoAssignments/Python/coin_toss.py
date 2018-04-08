import random
count_front = 0
count_back = 0
for x in range(1,11):
    coin = ""
    import random
    random_num = random.randint(0,1)

    if random_num == 1:
        count_front += 1
        coin = "head"

    else:
        count_back += 1
        coin = "tail"

    print "Attempt #",x, ": Throwing a coin... It's a", coin, "!... Got", count_front,"head(s) so far and ", count_back, "tail(s) so far"
        
      