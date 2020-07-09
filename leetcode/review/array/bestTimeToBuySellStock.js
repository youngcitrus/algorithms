var maxProfit = function(prices) {
    // if (!(prices.length)) return 0;
    let lowest = prices[0];
    let greatestDiff = 0;
    for (let i=1; i<prices.length; i++) {
        if (prices[i] < lowest) {
            lowest = prices[i];
        } else {
            let diff = prices[i] - lowest;
            greatestDiff = greatestDiff < diff ? diff : greatestDiff;
        }
    }
    return greatestDiff;
};

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/