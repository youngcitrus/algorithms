//Iterative
var rangeSumBST = function(root, L, R) {
    let sum = 0;
    const stack = [root];
    while (stack.length) {
        let current = stack.pop();
        if (current.val >= L && current.val <= R) sum += current.val;
        if (current.right && current.val < R) stack.push(current.right);
        if (current.left && current.val > L) stack.push(current.left);
    }
    return sum;
};

//recursive

var rangeSumBST = function(root, L, R) {
    let ans = 0
    function dfs(node) {
        if (node) {
            if (node.val >= L && node.val <= R) {
                ans += node.val;
            }
            if (node.val > L) dfs(node.left);
            if (node.val < R) dfs(node.right);
        }
    }
    dfs(root);
    return ans;
};

// recursive 2

var rangeSumBST = function(root, L, R) {
    if (!root) return 0;
    let value = 0;
    if (root.val >= L && root.val <= R) value = root.val;
    let left = root.val > L ? rangeSumBST(root.left, L, R) : 0;
    let right = root.val < R ? rangeSumBST(root.right, L, R) : 0;
    
    return left + value + right;
};