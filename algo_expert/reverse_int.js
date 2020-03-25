var reverse = function(x) {
    let nums;
    let isNegative = false;
    
    if (x < 0){
        nums = (x * -1).toString().split("");
        isNegative = true;
    } else {
        nums = x.toString().split("");
    }
    
    let sum = 0;
    for (let i=0; i < nums.length; i++){
        sum += nums[i] * 10**i; 
    }
    
    if (sum > 2**31 - 1) return 0;
    
    return isNegative ? -1 * sum : sum;
    
};