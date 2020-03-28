function zeroMatrix(matrix) {
    let row = new Array(matrix.length);
    let col = new Array(matrix[0].length);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (matrix[i][j] === 0) {
          row[i] = true;
          col[j] = true;
        }
      }
    }
    for (let i = 0; i < row.length; i++) {
      if (row[i] === true) nullifyRow(matrix, i);
    }
    for (let j = 0; j < col.length; j++) {
      if (col[j] === true) nullifyColumn(matrix, j);
    }
  }
  
  function nullifyRow(matrix, row) {
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }
  }
  
  function nullifyColumn(matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  };
  
  const testMatrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ];
  
  const printMatrix = function(matrix) {
    for (var i = 0; i < matrix.length; i++) {
      console.log(matrix[i]);
    }
  };
  
  console.log('before');
  printMatrix(testMatrix);
  
  zeroMatrix(testMatrix);
  
  console.log('after');
  printMatrix(testMatrix);