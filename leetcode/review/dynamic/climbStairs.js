var climbStairs = function(n, memo = {0: 1, 1: 1}) {
    if (n in memo) return memo[n];
    memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    return memo[n];
};

// https://leetcode.com/problems/climbing-stairs/