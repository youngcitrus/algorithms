var KthLargest = function(k, nums) {
    this.k = k;
    this.arr = nums.sort((a,b) => b-a);
};

KthLargest.prototype.add = function(val) {
    let pos = 0;
    while (true) {
        if (this.arr[pos] < val) {
            this.arr.splice(pos, 0, val);
            break;
        }
        if (pos === this.arr.length) {
            this.arr.push(val);
            break;
        }
        pos++;
    }
    return this.arr[this.k-1];
};