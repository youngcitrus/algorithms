var divide = function(dividend, divisor) {
    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;
    
    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT;
    }
    
    let negatives = 2;
    if (dividend > 0) {
        negatives -= 1;
        dividend = -dividend;
    }
    if (divisor > 0) {
        negatives -= 1;
        divisor = -divisor;
    }
    let quotient = 0;
    while ((dividend - divisor) <= 0) {
        quotient -= 1;
        dividend -= divisor;
    }
    
    return negatives === 1 ? quotient : -quotient;
};