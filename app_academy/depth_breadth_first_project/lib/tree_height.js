function treeHeight(root) {
    if (!root) return -1;
    let higher = treeHeight(root.left) > treeHeight(root.right) ? treeHeight(root.left) : treeHeight(root.right);
    return higher + 1;
}


module.exports = {
    treeHeight
};