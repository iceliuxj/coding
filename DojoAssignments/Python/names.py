# part 1
print "####below are part1 codes:"
students = [
     {'first_name':  'Michael', 'last_name': 'Jordan'},
     {'first_name': 'John', 'last_name': 'Rosales'},
     {'first_name': 'Mark', 'last_name': 'Guillen'},
     {'first_name': 'KB', 'last_name': 'Tonel'}
]

for item in students:
    print item["first_name"]+" "+item["last_name"]

#part 2
print "####below are part2 codes:"

users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

count = 0
print "Students"
for item in users["Students"]:
    count += 1
    print count," - ", item["first_name"].upper()+" "+item["last_name"].upper()," - ",len(item["first_name"])+len(item["last_name"])

print "Instructors"
count = 0
for item in users["Instructors"]:
    count += 1
    print count," - ", item["first_name"].upper()+" "+item["last_name"].upper()," - ",len(item["first_name"])+len(item["last_name"])

