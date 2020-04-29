Array.prototype.bubbleSort = function() {
    let swapped = true;
    while (swapped) {
        swapped = false;
        for (let i=0; i < (this.length - 1); i++) {
            if (this[i] > this[i + 1]) {
                let temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                swapped = true;
            }
        }
    }
    return this;
}

String.prototype.substrings = function() {
    const subs = [];
    for (let i=0; i<this.length; i++) {
        for (let j=i+1; j<=this.length; j++) {
            subs.push(this.slice(i,j));
        }
    }
    return subs;
}