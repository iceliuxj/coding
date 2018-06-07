module.exports = {
    add: function(num1, num2) { 
        let res = num1 + num2;
        console.log(res);
    },
    multiple: function(num1, num2) {
        let res = num1 * num2;
        console.log(res);
    },
    square: function(num) {
        let res = num*num;
        console.log(res);
    },
    random: function(min, max) {
        let res = Math.floor(Math.random() * (max - min + 1) ) + min;
        console.log(res);
    }
}
  