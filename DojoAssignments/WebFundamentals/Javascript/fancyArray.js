function printFancyArray() {
    var arrnew = [];
    var arr=["James", "Jill", "Jane", "Jack"]
    for (var i = 0; i < arr.length; i++){
        arrnew[i]= i + "->" + arr[i];
    }
    return arrnew;
}

console.log (printFancyArray())

   