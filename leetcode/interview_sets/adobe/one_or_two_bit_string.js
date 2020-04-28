var isOneBitCharacter = function(bits) {
    let i = 0;
    while (i < bits.length - 1) {
        if (bits[i] === 0) {
            i += 1;
        } else if (bits[i] === 1) {
            i += 2;
        }
    }
    return i === bits.length - 1 ? true : false
};