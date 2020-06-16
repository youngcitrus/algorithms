var flipAndInvertImage = function(A) {
    for (let i=0; i<A.length; i++) {
        flipRow(A[i]);
        invertRow(A[i]);
    }
    return A;
};

function swap(array, i, j ) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function flipRow(array) {
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        swap(array, left, right);
        left += 1;
        right -= 1;
    }
    
}

function invertRow(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i] === 0) array[i] = 1;
        else if (array[i] === 1) array[i] = 0;
    }
}

// https://leetcode.com/problems/flipping-an-image/submissions/