class Treenode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Treenode(1);
let b = new Treenode(2);
a.left = b;
let c = new Treenode(3);
a.right = c;
let d = new Treenode(5);
b.right = d;
let e = new Treenode(12);
let f = new Treenode(13);
c.left = e;
c.right = f;

function allPaths(root) {
    const result = [];
    allPathsHelper(root, [root.val], result);
    return result;
}
function allPathsHelper(root, pathSoFar, result) {
    if (!root.left && !root.right) {
        result.push(pathSoFar);
    }
    if (root.left) {
        let pathSoFarCopy = pathSoFar.slice(0);
        pathSoFarCopy.push(root.left.val);
        allPathsHelper(root.left, pathSoFarCopy, result)    
    }
    if (root.right) {
        let pathSoFarCopy = pathSoFar.slice(0);
        pathSoFarCopy.push(root.right.val);
        allPathsHelper(root.right, pathSoFarCopy, result)
    }
}

console.log(allPaths(a));
console.log(a);

//       1
//     /   \
//    2     3
//     \   / \
//     5   12 10
