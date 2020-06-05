var numRollsToTarget = (d, f, t, ans=0) => {
    let dp = [...Array(d + 1)].map(() => Array(t + 1).fill(0));
    dp[0][0] = 1;
    for (let i=1; i <= d; ++i)
        for (let j=1; j <= t; ++j)
            for (let k=1; k <= f; ++k)
                if (j - k >= 0)
                    dp[i][j] = (dp[i][j] + dp[i - 1][j - k]) % (1e9 + 7);
    return dp[d][t];
};