var licenseKeyFormatting = function(S, K) {
    let numString = '0123456789'
    let chars = S.split("-").join("").split("");
    let groupOneLength;
    let groupOne;
    
    if (chars.length >= K && chars.length % K !== 0) {
        groupOneLength = chars.length % K;
        groupOne = chars.slice(0, groupOneLength).map(char => {
            if (!numString.includes(char)) return char.toUpperCase();
            else return char;
        });
        chars = chars.slice(groupOneLength);
    }
    
    chars = chars.map(char => {
            if (!numString.includes(char)) return char.toUpperCase();
            else return char;
        });
    
    let result = "";
    let i = 0;
    while (i < chars.length) {
        result += chars[i];
        i += 1;
        if ( i < chars.length && i % K === 0) result += '-';
    }
    
    let ans = groupOne !== undefined ? groupOne.join('') + "-" + result : result;
    return ans;
    
};