var BSTIterator = function(root) {
    this.values = [];
    this._leftmost_inorder(root);
};

BSTIterator.prototype._leftmost_inorder = function(root) {
    while (root) {
        this.values.push(root);    
        root= root.left;
    }
    
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    const topNode = this.values.pop();
    if (topNode.right) {
        this._leftmost_inorder(topNode.right) 
        
    }
    return topNode.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.values.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

 // https://leetcode.com/problems/binary-search-tree-iterator/