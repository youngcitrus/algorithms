var maxProfit = function(prices) {
    let b = 0;
    let s = 1;
    let maxProfit = 0;
    while (s < prices.length) {
        let profit = prices[s] - prices[b];
        if (profit > maxProfit) {
            maxProfit = profit;
        } else if (prices[b] > prices[s]) {
            b = s;
        }
        s += 1;
    }
    return maxProfit;
};