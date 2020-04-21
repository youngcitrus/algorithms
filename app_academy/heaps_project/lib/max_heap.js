class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return 2 * idx;
    }

    getRightChild(idx) {
        return 2 * idx + 1;
    }

    siftUp(idx) {
        if (idx === 1) return;
        let parentIdx = this.getParent(idx);
        if (this.array[parentIdx] < this.array[idx]) {
            [ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ]
            this.siftUp(parentIdx);
        }
    }

    insert(val) {
        this.array.push(val);
        this.siftUp(this.array.length - 1);
    }

    siftDown(idx) {
        let array = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = array[leftIdx];
        let rightVal = array[rightIdx];
        
        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;

        if (array[idx] > leftVal && array[idx] > rightVal) return;

        let swapIdx;
        if (leftVal < rightVal) {
            swapIdx = rightIdx;
        } else {
            swapIdx = leftIdx;
        }

        [ array[idx], array[swapIdx] ] = [ array[swapIdx], array[idx] ];
        this.siftDown(swapIdx);
    }

    deleteMax() {
        if (this.array.length === 1) return null;
        if (this.array.length === 2) return this.array.pop();
        let max = this.array[1];
        this.array[1] = this.array.pop();
        this.siftDown(1);
        return max;
    }

}

module.exports = {
    MaxHeap
};