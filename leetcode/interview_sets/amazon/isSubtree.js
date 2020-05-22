var isSubtree = function(s, t) {
    const stack = [s];
    while (stack.length) {
        let current = stack.pop();
        if (checkEqual(current, t)) return true;
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
    return false;
};

// function findNodes(root, target, result = []) {
//     if (root.val === target) result.push(root);
//     if (root.left) findNodes(root.left, target, result);
//     if (root.right) findNodes(root.right, target, result);
//     return result;
// }

function checkEqual(root1, root2) {
    if (root1 === null && root2 === null) return true;
    if ((root1 && !root2) || (!root1 && root2)) return false;
    if (root1.val !== root2.val) return false;
    let leftCheck = checkEqual(root1.left, root2.left);
    let rightCheck = checkEqual(root1.right, root2.right);
    if (leftCheck && rightCheck) return true;
    return false;
}