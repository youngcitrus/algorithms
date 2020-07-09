var coinChange = function(coins, amount) {
    const dp = new Array(amount+1).fill(Infinity);
    dp[0] = 0;
    for (coin of coins) {
        for (let i = coin; i<amount+1; i++) {
            dp[i] = Math.min(dp[i], dp[i-coin] + 1);
        }
    }
    return dp[amount] !== Infinity ? dp[amount] : -1;
};

// https://leetcode.com/problems/coin-change/