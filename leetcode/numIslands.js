var numIslands = function(grid) {
    
    const visited = {};
    let count = 0;
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if ([i,j] in visited) continue;
            if (grid[i][j] === "1") {
                count += 1;
                const queue = [[i, j]];
                while (queue.length) {
                    
                    let [row, col] = queue.pop();
                    
                    if ([row, col] in visited) continue;
                    
                    visited[[row, col]] = true
                    if (row - 1 >= 0 && grid[row - 1][col] === "1") {
                        if (!([row - 1, col] in visited)) queue.push([row - 1,col]);
                    }
                    if (row + 1 < grid.length && grid[row + 1][col] === "1") {
                        if (!([row + 1, col] in visited)) queue.push([row + 1, col]);
                    }
                    if (col - 1 >= 0 && grid[row][col - 1] === "1") {
                        if (!([row, col - 1] in visited)) queue.push([row, col - 1]);
                    }
                    if (col + 1 < grid[0].length && grid[row][col + 1] === "1") {
                        if (!([row, col + 1] in visited)) queue.push([row, col + 1])
                    }
                }
                
            } 
        }
    }
    return count;
};

// better below (constant O(1) space)

var numIslands = function(grid) {
    
    let count = 0;
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[0].length; j++) {
            if (grid[i][j] === "1") {
                count += 1;
                const queue = [[i, j]];
                while (queue.length) {
                    
                    let [row, col] = queue.pop();
                    
                    if (grid[row][col] === "0") continue;
                    grid[row][col] = "0";
                    
                    
                    if (row - 1 >= 0 && grid[row - 1][col] === "1") {
                        queue.push([row - 1,col]);
                    }
                    if (row + 1 < grid.length && grid[row + 1][col] === "1") {
                        queue.push([row + 1, col]);
                    }
                    if (col - 1 >= 0 && grid[row][col - 1] === "1") {
                        queue.push([row, col - 1]);
                    }
                    if (col + 1 < grid[0].length && grid[row][col + 1] === "1") {
                        queue.push([row, col + 1])
                    }
                }
                
            } 
        }
    }
    return count;
};
