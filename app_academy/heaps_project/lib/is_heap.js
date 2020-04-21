// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array) {
    let isComplete = array.every(el => el !== undefined);
    return isComplete && _isMaxHeap(array);
}

function _isMaxHeap(array, idx=1) {
    if (array[idx] === undefined) return true;
    let leftIdx = idx * 2;
    let rightIdx = idx * 2 + 1;
    let leftChild = array[leftIdx];
    let rightChild = array[rightIdx];
    
    if (leftChild === undefined) leftChild = -Infinity;
    if (rightChild === undefined) rightChild = -Infinity;

    if (array[idx] < leftChild || array[idx] < rightChild) return false;

    return (_isMaxHeap(array, leftIdx) && _isMaxHeap(array, rightIdx));
}


module.exports = {
    isMaxHeap
};