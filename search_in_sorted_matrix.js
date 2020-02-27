function searchInSortedMatrix(matrix, target) {
// Write your code here.
    let row = 0;
    let col = matrix[0].length - 1;
    
    while (row < matrix.length && col >= 0){
        if (target < matrix[row][col]) col -= 1;
        else if (target > matrix[row][col]) row += 1;
        else return [row, col];
    }
    return [-1, -1];
}