// with normal arrays and integers
var depthSumInverse = function(nestedList) {
    let store = {};
    helper(nestedList, store);
    let sum = 0;
    const deepestLevel = Math.max(...Object.keys(store).map(Number));
    for (let level in store) {
        let multiplier = deepestLevel - level + 1;
        store[level].forEach(value => {
           sum += multiplier * value; 
        });
    }
    
    return sum;
    
};

function helper(nestedList, store, level=1) {
    nestedList.forEach(el => {
        if (Array.isArray(el)) {
            helper(el, store, level + 1);
        } else {
            if (level in store) store[level].push(el);
            else store[level] = [el]
        }
    });
}

console.log(depthSumInverse([1,[4,[6]]]))

// with leetcode's NestedInteger interface

var depthSumInverse = function(nestedList) {
    const store = {};
    nestedList.forEach(nestedInteger => {
        helper(nestedInteger, store);
    });
    let sum = 0;
    const deepestLevel = Math.max(...Object.keys(store).map(Number));
    for (let level in store) {
        let multiplier = deepestLevel - level + 1;
        store[level].forEach(value => {
           sum += multiplier * value; 
        });
    }
    return sum;
};

function helper(nestedInteger, store, level=1) {
    if (nestedInteger.isInteger()) {
        if (level in store) store[level].push(nestedInteger.getInteger());
        else store[level] = [nestedInteger.getInteger()];
    } else {
        nestedInteger.getList().forEach(el => {
            helper(el, store, level+1)
        })
    }
}