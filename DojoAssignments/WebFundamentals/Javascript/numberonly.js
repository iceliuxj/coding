function numberonly(arr) {
    var arrnew = [];
    for (var i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            arrnew.push(arr[i]);
        }
    }
    console.log (arrnew);
}

numberonly([1,"apple", -3, "orange",0.5]);