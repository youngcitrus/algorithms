Array.prototype.myEach = function(callback) {
    for (let i=0; i<this.length; i++) {
        callback(this[i]);
    }
};

Array.prototype.myMap = function(callback) {
    const result = [];
    this.myEach(el => {
        result.push(callback(el));
    })
    return result;
};

Array.prototype.myReduce = function(callback, acc=this[0]) {
    let start = acc ? 0 : 1

    for (let i=start; i<this.length; i++) {
        acc = callback(acc, this[i]);
    }
    return acc;
};