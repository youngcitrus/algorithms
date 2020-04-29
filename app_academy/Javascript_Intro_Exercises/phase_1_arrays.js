Array.prototype.uniq = function() {
    let newArray = [];
    for (let i=0; i<this.length; i++) {
        if (!newArray.includes(this[i])) {
            newArray.push(this[i]);
        }
    }
    return newArray;
}

Array.prototype.twoSum = function(target) {
    this.sort((a,b) => a - b);
    let pairs = [];
    let left = 0;
    let right = this.length - 1;
    while (left < right) {
        let sum = this[left] + this[right];
        if (sum < target) {
            left += 1;
        } else if (sum > target) {
            right -= 1;
        } else {
            pairs.push([left, right]);
            left += 1;
            right -= 1;
        }
    }
    return pairs;
}

Array.prototype.transpose = function() {
    let newMatrix = [];
    for (let h=0; h<this[0].length; h++) {
        newMatrix[h] = [];
    }
    for (let i=0; i<this[0].length; i++) {
        for (let j=0; j<this.length; j++) {
            newMatrix[i].push(this[j][i]);
        }
    }
    return newMatrix;
}