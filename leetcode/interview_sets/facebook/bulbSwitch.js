var bulbSwitch = function(n) {
    return Math.floor(Math.sqrt(n));
};

// brute force:
var bulbSwitch = function(n) {
    const bulbs = new Array(n).fill(0);
    for (let round = 0; round < n; round++) {
        if (round === 0) bulbs.fill(1);
        else if (round === n-1) toggle(bulbs, n-1);
        else {
            for (let i=0; i<n; i++) {
                if ((i + 1) % (round + 1) === 0) toggle(bulbs, i)
            }
        }
        // console.log(bulbs)
    }
    let count = 0;
    for (let j=0; j<bulbs.length; j++) {
        if (bulbs[j] === 1) count += 1;
    }
    return count;
};
    
function toggle(array, index) {
    if (array[index] === 0) array[index] = 1;
    else array[index] = 0;
}