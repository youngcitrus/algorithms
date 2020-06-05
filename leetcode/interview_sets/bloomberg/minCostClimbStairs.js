var minCostClimbingStairs = function(cost) {
    let dp = new Array(cost.length);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i=2; i<dp.length; i++) {
        dp[i] = Math.min(dp[i-1] + cost[i], dp[i-2] + cost[i]);
    }
    return Math.min(dp[dp.length-2], dp[dp.length-1]);
};