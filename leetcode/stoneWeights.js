var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        let heaviest = removeLargest(stones);
        let secondHeaviest = removeLargest(stones);    
        if (heaviest !== secondHeaviest) {
            stones.push(heaviest - secondHeaviest);
        }
    }
    return stones.length === 1 ? stones[0] : 0
    
};

function removeLargest(stones) {
    const indexOfLargest = stones.indexOf(Math.max(...stones));
    let temp = stones[indexOfLargest];
    stones[indexOfLargest] = stones[stones.length - 1];
    stones[stones.length - 1] = temp;
    return stones.pop();
}