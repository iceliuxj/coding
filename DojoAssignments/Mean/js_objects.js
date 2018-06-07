//challenge 1
var students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];


for (var i = 0; i < students.length; i ++){
    var res = "";
    for (var key in students[i]){
        str = key + ": " + students[i][key] + ", " ;
        res += str;
    }
    console.log(res);
}

//challenge 2
var users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for (var key in users){
    console.log(key.toUpperCase());
    var arr=users[key];
    for (var i = 0; i < arr.length; i++){
        var countlen= (arr[i]['first_name']).length + (arr[i]['last_name']).length;
        var res = (i+1)+ " - " + arr[i]['last_name'].toUpperCase() + ", " + arr[i]['first_name'].toUpperCase() + " - " + countlen;
        console.log(res);
    }
    
}






        

        
    
