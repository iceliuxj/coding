function randomChance (quarters) {
    var totalreward = 0;
    var winreward = 0;
    // leftquarters = quaters;
    for (var i = 1; i <= quarters; i++) {
        var playchance = Math.floor(Math.random()*99)+1;
        if (playchance === 1) {
            var winreward = Math.floor(Math.random()*50)+50;
            totalreward += winreward;
        }

        // var leftquarters = quarters - i + winreward;
        // console.log ("remainning quarters: " + leftquaters);
    }

    console.log ("totalreward is: " + totalreward);
    return totalreward;
}

randomChance(325)

