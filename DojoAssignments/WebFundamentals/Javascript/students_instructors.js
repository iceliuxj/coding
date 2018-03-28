function printName(arr){
var name = "";
for (var i in arr) {
    // i is the index in arr;
    for (var x in arr[i]) {
        name += arr[i][x] + " ";
    }
    name = name + "\n";
}
console.log(name);
}

var student = [
    {first_name: "Michael", last_name: "Jordan"},
    {first_name: "John", last_name: "Rosales"},
    {first_name: "Mark", last_name: "GUillen"},
    {first_name: "KB", last_name: "Tonel"}
];

printName(student);


