function minNumberOfCoinsForChange(n, denoms) {
// Write your code here.
    const numOfCoins = new Array(n+1).fill(Infinity);
    numOfCoins[0] = 0;
    for (let i=0; i<denoms.length; i++){
        for (let amount=0; amount<numOfCoins.length; amount++){
            if (denoms[i] <= amount) numOfCoins[amount] = Math.min(numOfCoins[amount], 1 + numOfCoins[amount-denoms[i]])
        }
    }
    return numOfCoins[n] !== Infinity ? numOfCoins[n] : -1
}