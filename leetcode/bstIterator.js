var BSTIterator = function(root) {
    this.values = [];
    this.pointer = 0;
    if (!root) return;
    
    this._inorder(root);
};

BSTIterator.prototype._inorder = function(root) {
    if (!root) return;
    this._inorder(root.left);
    this.values.push(root.val);
    this._inorder(root.right);
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    const nextValue = this.values[this.pointer];
    this.pointer += 1;
    return nextValue;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.pointer < this.values.length;
};
