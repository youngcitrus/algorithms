// iterative

var sumOfLeftLeaves = function(root) {
    if (!root) return 0;
    let sum = 0;
    const stack = [[root, false]];
    while (stack.length) {
        let [current, isLeft] = stack.pop();
        if (!current.left && !current.right && isLeft) {
            sum += current.val;
        }
        
        if (current.right) stack.push([current.right, false]);
        if (current.left) stack.push([current.left, true]);
    }
    return sum;
};

//recursive

var sumOfLeftLeaves = function(root) {
   
    if (!root || (!root.left && !root.right)) return 0;
    return helper(root);
};

var helper = function(root) {
    if (!root) return 0;
    if (!root.left && !root.right) {
        return root.val
    }
    let sum = 0;
    let rightLeaf = false;
    if (root.right && !root.right.left && !root.right.right) {
        rightLeaf = true;
    }
    rightLeaf = rightLeaf ? 0 : helper(root.right);
    sum += helper(root.left) + rightLeaf;
    return sum; 
}

// https://leetcode.com/problems/sum-of-left-leaves/submissions/