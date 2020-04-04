function coinCombinations(coins, amount) {
    if (amount === 0) return [[]];
    const results = [];

    for (let i=0; i < coins.length; i++) {
        if (coins[i] <= amount){
        
        let newCombinations = coinCombinations(coins.slice(i), amount - coins[i]);
        newCombinations.forEach((combo) => {
            results.push([coins[i]].concat(combo));
        })
        }
    }
    return results;
}

console.log(coinCombinations([10,7,1], 14))