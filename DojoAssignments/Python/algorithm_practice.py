# 1. return an array with all numbers from 1 to 255
'''def creatArray():
    list1 = []
    for x in range(1,256):
        list1.append(x)
    print list1

creatArray()'''

# 2. get the sum of all the even numbers from 1 to 1000
def sumEven():
    sum = 0
    for x in range(0,1001):
        if x%2 == 0:
            sum += x
    print sum

sumEven()

# 3. write a function that returns the sum of all he odd numbers from 1 to 5000
def sumOdd():
    sum = 0
    for x in range(0,5001):
        if x%2 == 1:
            sum += x
    print sum

sumOdd()

# 4. write a function that returns the sum of all the values within an array.
def sumTotal(list1):
    sum = 0
    for x in list1:
        sum += x
    print sum

sumTotal ([-5, 2, 5, 12])

# 5. write a function that returns the maximum number in the array.
def findMax(list1):
    max = list1[0]
    for x in list1:
        if max < x:
            max = x
    print max

'''def findMax(list1):
    print max(list1)'''
    
findMax([-3,3,5,7])

# 6. return average in an array
def findAvg(list1):
    avg = float(sum(list1))/len(list1)
    print avg

findAvg([1,3,5,7,20])

# 7. write a function that would return an array of all the odd numbers between 1 to 50
def oddNumber():
    list1 = []
    for x in range(1,51):
        if x%2 == 1:
            list1.append(x)
    print list1

oddNumber()

# 8. Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.
def greaterY(list1, y):
    count = 0
    for x in list1:
        if x > y:
            count += 1
    print count

greaterY([1,3,5,7],3)

# 9. Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
def sqaureVal(list1):
    for x in range(0,len(list1)):
        list1[x] *= list1[x]
    print list1

sqaureVal([1,5,10,-2])

# 10. Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
def noNeg(list1):
    for x in range(0,len(list1)):
        if list1[x] < 0:
            list1[x] = 0
    print list1

noNeg([1,5,10,-2])

# 11. Max/Min/Avg: Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
def maxMinAvg(list1):
    avg = 0
    max1 = 0
    min1 = 0
    new_list = []
    for x in list1:
        if max1 < x:
            max1 = x
        
        if min1 > x:
            min1 = x
    avg = float(sum(list1))/len(list1)
    new_list.append(max1)
    new_list.append(min1)
    new_list.append(avg)
    print new_list

maxMinAvg([1,5,10,-2])

# 12. Swap values: Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
def swap(list1):
    temp = list1[0]
    list1[0] = list1[len(list1)-1]
    list1[len(list1)-1] = temp
    print list1
swap([1,5,10,-2])

#13. Number to string: Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
def numToStr(list1):
    for x in range(0,len(list1)):
        if list1[x] < 0:
            list1[x] = "Dojo"
    print list1

numToStr([-1,-3,2])





















