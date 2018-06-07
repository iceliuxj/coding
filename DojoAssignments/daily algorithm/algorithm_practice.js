// string split to array
// function strSplit(string){
//     var arr = [];
//     for (var i = 0; i < string.length; i++){
//         arr.push(string[i])
//     }
//     console.log(arr)
// }

// strSplit("hello")

// //string join to array
// function strJoin(arr){
//     var result = "";
//     for (var i = 0; i < arr.length; i++){
//         result += arr[i];
//     }
//     console.log(result)
// }

// strJoin([ 'h', 'e', 'l', 'l', 'o' ])

//palindrome

//convert numbers to roman numberal

//count all characters in a string

// coin change (quarter, dim, nickle, penny)

// str replace

//sll add() remove() find()

//contain(val) addToFront() addToBack() removeFront() removeBack() addtoMiddle(pos, val) removeFromMiddle()


// function Node(ele){
//     this.element = ele;
//     this.next = null;
// }

// function Sll(){
//     this.head = null

// Sll.prototype.add = function(val){
//     var nn = newnode(val);
//     nn.next = this.head;
//     this.head = nn
// }

// var v1 ={a:1};
// var v2 = v1;
// v2.a = 4;
// console.log(v1.a);

// var v1 ={a:1};
// var v2 = {};
// v2.a = v1.a;
// v2.a = 4;
// console.log(v1.a);

/////SSL

function Node(val){
    this.val = val;
    this.next = null;
}

function Sll(){
    this.head = null;
}

Sll.prototype.addtoFront = function addtoFront(val){
    var nn = new Node(val);
    nn.next = this.head.next;
    this.head = nn;
}

Sll.prototype.find = function (val){
    var cur = this.head;
    while (cur !== null && cur.val !== val){
        cur = cur.next;
    }
    return cur;
}

Sll.prototype.addtoMiddle = function (val, targetVal){
    var nn = new Node(val);
    var targetNode = this.find(targetVal);
    var cur= this.head;
    while (cur !== null && cur.next !== targetNode){
        cur = cur.next;
    }
    nn.next = targetNode;
    cur.next = nn;
    return this;
}
// 
function printNumbersRec(start, end) {
    if (start > end) {
        return;
    }

    if (start % 2 === 1) {
        console.log(start * start);
    }

    printNumbersRec(start + 1, end);

    if (start % 2 === 0) {
        console.log(start * start);
    }
}

