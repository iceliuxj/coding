function rangePrint(startNum, endNum, skipNum) {
    var printResult = [];
    for (var i = startNum; i < endNum; i+=skipNum) { 
        printResult.push(i);
    }
    console.log (printResult);
    // return printResult;
}

// console.log (rangePrint (2,10,2));

rangePrint (2,12,2);
