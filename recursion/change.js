function makeBetterChange(target, coins = [25, 10, 5, 2, 1]) {
    // your code here
    if (target === 0) return [];
    coins = coins.sort((a, b) => a - b).reverse();
    let bestChange = null;

    for (let i = 0; i < coins.length; i++) {
        if (coins[i] > target) {
            continue;
        }
        const remainder = target - coins[i];
        const bestRemainder = makeBetterChange(remainder, coins.slice(i));
        if (bestRemainder === null) {
            continue;
        }
        const currentChange = [coins[i], ...bestRemainder];

        if (bestChange === null || bestChange.length > currentChange.length) {
            bestChange = currentChange;
        }
    }
    return bestChange;
}
function greedyMakeChange(target, coins = [25, 10, 5, 1]) {
    // no tests for greedyMakeChange so make sure to test this on your own
    if (target === 0) return [];

    for (let i = 0; i < coins.length; i++) {
        if (target >= coins[i]) {
            return [coins[i], ...greedyMakeChange(target - coins[i], coins)]
        }
    }

}