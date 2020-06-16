var leafSimilar = function(root1, root2) {
    const vals1 = [];
    const vals2 = [];
    leafValueSequence(root1, vals1);
    leafValueSequence(root2, vals2);
    return arraysAreEqual(vals1, vals2);
};

function leafValueSequence(root, vals) {
    if (!root) return;
    if (!root.left && !root.right) vals.push(root.val);
    leafValueSequence(root.left, vals);
    leafValueSequence(root.right, vals);
}

function arraysAreEqual(array1, array2) {
    if (array1.length !== array2.length) return false;
    for (let i=0; i<array1.length; i++) {
        if (array1[i] !== array2[i]) return false;
    }
    return true;
}