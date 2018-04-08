def scoreGrade():
    for x in range(1,11):
        import random
        random_num = random.randint(60,100)

        if random_num in range(90,101):
            print "Score: ", random_num, "; Your grade is A"
        if random_num in range(80,90):
            print "Score: ", random_num, "; Your grade is B"
        if random_num in range(70,80):
            print "Score: ", random_num, "; Your grade is C"
        if random_num in range(60,70):
            print "Score: ", random_num, "; Your grade is D"

scoreGrade()

