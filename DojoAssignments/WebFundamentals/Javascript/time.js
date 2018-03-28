var hour = 8;
var minute = 50;
var period = "AM";

if (minute > 30 && period == "AM") {
    hour = hour + 1;
    console.log( "It's almost " + hour + " in the morning")
};

var hour = 7;
var minute = 15;
var period = "PM";

if (minute <= 30 && period == "PM") {
    console.log ("It's just after " + hour + " in the evening")
}