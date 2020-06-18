var diagonalSort = function(mat) {
    for (let col = 0; col < mat[0].length; col++) {
        sortOneDiagonal(mat, 0, col);    
    }
    for (let row = 0; row < mat.length; row++) {
        sortOneDiagonal(mat, row, 0);
    }
    
    return mat;
    
};

// Time: mlogM * (m + n)
// Space: O(m) 

function sortOneDiagonal(matrix, row, col) {
    let newRow = row;
    let newCol = col;
    const diagonal = [];
    while (newRow < matrix.length && newCol < matrix[0].length) {
        diagonal.push(matrix[newRow][newCol]);
        newRow += 1;
        newCol += 1;
    }
    
    diagonal.sort((a,b) => (a-b)); // mlogM
    newRow = row;
    newCol = col;
    
    let i = 0;
    while (newRow < matrix.length && newCol < matrix[0].length) {
        matrix[newRow][newCol] = diagonal[i];
        i += 1;
        newRow += 1;
        newCol += 1;
    }
    
}