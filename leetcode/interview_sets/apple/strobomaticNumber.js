var isStrobogrammatic = function(num) {
    const hash = { "0" : "0",
                 "1": "1",
                 "6" : "9",
                  "8" : "8",
                  "9" : "6"
                 };
    // let rotated = "";
    // for (let i=num.length - 1; i>=0; i--) {
    //     if (num[i] in hash) {
    //         rotated += hash[num[i]];
    //     } else {
    //         return false;
    //     }
    // }
    // return num === rotated;
    let left = 0;
    let right = num.length - 1;
    while (left <= right) {
        if (!(num[left] in hash) || !(num[right] in hash) || num[left] !== hash[num[right]]) {
            return false;
        }
        left += 1;
        right -= 1;
    }
    return true;
};