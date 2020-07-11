var setZeroes = function(matrix) {
    const rowsToTransform = new Set();
    const columnsToTransform = new Set();
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                if (!(rowsToTransform.has(i))) rowsToTransform.add(i);
                if (!(columnsToTransform.has(j))) columnsToTransform.add(j);
            }
        }
    }
    for (let row of rowsToTransform) {
        transformRow(matrix, row);
    }
    for (let col of columnsToTransform) {
        transformColumn(matrix, col);
    }
    return matrix;
};

function transformRow(matrix, row) {
    for (let i=0; i<matrix[row].length; i++) {
        matrix[row][i] = 0;
    }
}

// https://leetcode.com/problems/set-matrix-zeroes/solution/

// more optimal (O(1) space)

var setZeroes = function(matrix) {
    let transformFirstCol = false;
    const R = matrix.length;
    const C = matrix[0].length;
    
    for (let i=0; i<R; i++) {
        if (matrix[i][0] === 0) {
            transformFirstCol = true;
        }
        for (let j=1; j<C; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    for (let i=1; i<R; i++) {
        for (let j=1; j<C; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    if (matrix[0][0] === 0) {
        for (let j=0; j<C; j++) {
            matrix[0][j] = 0;
        }
    }
    
    if (transformFirstCol) {
        for (let i=0; i<R; i++) {
            matrix[i][0] = 0;
        }
    }
    
    return matrix;
    
}