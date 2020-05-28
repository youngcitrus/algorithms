var deepestLeavesSum = function(root) {
    const stack = [[root,0]];
    let deepestLevel = 0;
    let deepestSum = 0;
    while (stack.length) {
        let [current, level] = stack.pop();
        if (level > deepestLevel) {
            deepestLevel = level;
            deepestSum = current.val;
        } else if (level === deepestLevel) {
            deepestSum += current.val;
        }
        
        if (current.right) stack.push([current.right, level + 1]);
        if (current.left) stack.push([current.left, level + 1]);
        
    }
    
    return deepestSum;
};

/*
var deepestLeavesSum = function(root) {
    let sum = [];
    let lvl = 0;
    DFS(root, lvl, sum)
    return sum[sum.length-1]
};
const DFS = (root, lvl, arr) => {
    if (!root) return;
    arr[lvl] = (arr[lvl] || 0) + root.val
    
    DFS(root.left, lvl+1, arr);
    DFS(root.right, lvl+1, arr);

*/
