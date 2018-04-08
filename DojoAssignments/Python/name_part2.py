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
    print count," - ", item["first_name"]+" "+item["last_name"]," - ",len(item["first_name"])+len(item["last_name"])

print "Instructors"
count = 0
for item in users["Instructors"]:
    count += 1
    print count," - ", item["first_name"]+" "+item["last_name"]," - ",len(item["first_name"])+len(item["last_name"])