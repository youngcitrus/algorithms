var NumMatrix = function(matrix) {
    this.matrix = matrix;
    
};

NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let sum = 0;
    for (let row=row1; row <= row2; row++) {
        for (let col=col1; col <= col2; col++) {
            sum += this.matrix[row][col];
        }
    }
    return sum;
};

// https://leetcode.com/problems/range-sum-query-2d-immutable/submissions/