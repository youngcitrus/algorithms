// recursive
// function binarySearch(array, target) {
//     if (array.length === 0) return false;

//     let mid = Math.floor(array.length/2);
//     let left = array.slice(0, mid);
//     let right = array.slice(mid+1);
//     if (target < array[mid]) return binarySearch(left, target);
//     else if (target > array[mid]) return binarySearch(right, target);
//     else return true;

// }

//iterative

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right)/ 2);
        if (target < array[mid]) {
            right = mid - 1;
        } else if (target > array[mid]) {
            left = mid + 1;
        } else {
            return true;
        }
    }
    return false;
}

//iterative
function binarySearchIndex(array,target) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right)/2);
        if (target < array[mid]) {
            right = mid - 1;
        } else if (target > array[mid]) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
}

//recursive 
/*
function binarySearchIndex(array, target) {
    if (array.length === 0) return -1;

    let mid = Math.floor(array.length/2);
    if (target < array[mid]) return binarySearchIndex(array.slice(0,mid), target);
    else if (target > array[mid]) {
        let result = binarySearchIndex(array.slice(mid+1), target);
        return result === -1 ? -1 : result + mid + 1;
        }
    else return mid;
    
}
*/

module.exports = {
    binarySearch,
    binarySearchIndex
};