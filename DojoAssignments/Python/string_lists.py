words = "It's thanksgiving day. It's my birthday, too!"
str1 = "day"
str2 = "month"
print words.find(str1)
newstr = words.replace(str1, str2, 1)
print newstr

x = [2,54,-2,7,12,98]
print min(x)
print max(x)

x = ["hello",2,54,-2,7,12,98,"world"]
y = [x[0], x[-1]]
print y

x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
y = x
result = [y[0: int(len(y)/2)]]
result.extend(y[int(len(y)/2):len(y)])
print result

