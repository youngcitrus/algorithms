var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let result = "";
    let n = 0;
    let flag = false;
    
    while (n < strs[0].length) {
        let currentLetter = strs[0][n];
        for (let i=1; i < strs.length; i++) {
            if (currentLetter !== strs[i][n]) {
                flag = true;
                break;
            }
        }
        if (flag) break;
        else {
            result += currentLetter;
            n++;
        }
    }
    return result;
};