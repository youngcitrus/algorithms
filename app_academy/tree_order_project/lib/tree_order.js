function inOrderArray(root) {
    if (!root) return [];
    // let array = [];
    // array = array.concat(inOrderArray(root.left));
    // array.push(root.val);
    // array = array.concat(inOrderArray(root.right));
    // return array;

    return [...inOrderArray(root.left), root.val, ...inOrderArray(root.right)]

}

function postOrderArray(root) {
    if (!root) return [];
    // let array = [];
    // array.push(...postOrderArray(root.left))
    // array.push(...postOrderArray(root.right));
    // array.push(root.val);
    // return array;
    return [...postOrderArray(root.left), ...postOrderArray(root.right), root.val]
}


module.exports = {
    inOrderArray,
    postOrderArray
};