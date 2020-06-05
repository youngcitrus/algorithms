function sumOfLeaves(root) {
    if (!root) return 0;
    
    if (!root.left && !root.right) {
        return root.val
    }
    let sum = 0;
    sum += sumOfLeaves(root.left) + sumOfLeaves(root.right)
    return sum;
}