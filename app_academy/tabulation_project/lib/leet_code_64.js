// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
    let table = new Array(grid.length);
    for (let i=0; i<grid.length; i++) {
        table[i] = (new Array(grid[0].length));
    }
    table[0][0] = grid[0][0];
    for (let i=1; i<grid[0].length; i++) {
        table[0][i] = table[0][i-1] + grid[0][i];
    }
    for (let j=1; j<grid.length; j++) {
        table[j][0] = table[j-1][0] + grid[j][0];
    }
    
    for (i=1; i<grid.length; i++) {
        for (j=1; j<grid[0].length; j++) {
            table[i][j] = Math.min(grid[i][j] + table[i-1][j], grid[i][j] + table[i][j-1] )
        }
    }
    return table[table.length-1][table[0].length-1];
}