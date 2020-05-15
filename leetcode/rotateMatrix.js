function rotateMatrix(matrix) {
    for (let i=0; i<matrix.length; i++) {
        for (let j=i; j<matrix.length; j++) {
            const temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
    for (let k=0; k<matrix.length; k++) {
        let left = 0;
        let right = matrix.length - 1;
        while (left < right) {
            let temp = matrix[k][left];
            matrix[k][left] = matrix[k][right];
            matrix[k][right] = temp;
            left += 1;
            right -= 1;
        }
    }
    return matrix;
}

let arr = [ [1, 2, 3],[4, 5, 6],[7, 8, 9]];
console.log(rotateMatrix(arr));