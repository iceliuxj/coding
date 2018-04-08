x = "Hello World!"
print x
y = 52
print y

name = "Zen"
print "My name is", name

name = "Zen"
print "My name is" + name

first_name = "Zen"
last_name = "Coder"
print "My name is {} {}".format(first_name, last_name)

hw = "hello %s" % 'world'
print hw

x = "Hello World"
print x.upper()

fruits = ['apple', 'banana', 'orange', 'strawberry']
vegetables = ['lettuce', 'cucumber', 'carrots']

fruits_and_vegetables = fruits + vegetables
print fruits_and_vegetables
salad = 3 * vegetables
print salad

x = [1,2,3,4,5]
x.append(99)
print x

age = 15
if age >= 18:
	print 'Legal age'
elif age == 17:
	print 'You are seventeen.'
else:
	print 'You are so young!'

# loop 
# for <counter> in <sequence or range>:
# do something
for count in range (0,5):
	print "looping -", count

#for loop (when we know how many times we want to repeat)
my_list = [4, 'dog', 99, ['list', 'inside', 'another'], 'hello world!']
for element i my_list:
	print element

#while loop (when we don't know how many times we have to repeat)
# syntax: while <expression>:
# do something
count = 0
while count < 5:
	print 'looping - ', count
	count += 1

# pass statement is a null operation; nothing happens when it executes. 
# It never seen in final production, but can be useful in places where your code has not been completed yet. 















