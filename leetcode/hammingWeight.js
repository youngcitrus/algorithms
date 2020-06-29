var hammingWeight = function(n) {
    let count = 0;
    let numString = n.toString(2);
    for (let i=0; i<numString.length; i++) {
        if (numString[i] === '1') {
            count += 1;
        }
    }
    return count;
};

// Using bit manipulation

// using bit mask

var hammingWeight = function(n) {
    let count = 0;
    let mask = 1;
    for (let i=0; i<32; i++) {
        if ((n & mask) !== 0) count += 1;
        mask <<= 1;
    }
    return count;
};

// using bit flipping

var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        count += 1;
        n &= (n - 1)
    }
    return count;
};

