var countAndSay = function(n) {
    if (n === 1) return "1";
    let previous = countAndSay(n - 1);
    let newString = "";
    let i = 0;
    while (i < previous.length) {
        let count = 1;
        while (i + count < previous.length && previous[i] === previous[i + count]) {
            count += 1;
        }
        newString += count.toString() + previous[i];
        i += count;
    }
    
    return newString;
};