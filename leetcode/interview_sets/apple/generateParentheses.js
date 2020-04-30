var generateParenthesis = function(n) {
    const result = [];
    backtrack(result, "", 0, 0, n);
    return result;
};

function backtrack(arr, currentString, open, close, max) {
    if (currentString.length === max * 2) {
        arr.push(currentString);
        return;
    }
    
    if (open < max) {
        backtrack(arr, currentString + "(", open + 1, close, max);
    }
    if (close < open) {
        backtrack(arr, currentString + ")", open, close + 1, max);
    }
}

// https://www.youtube.com/watch?v=qBbZ3tS0McI