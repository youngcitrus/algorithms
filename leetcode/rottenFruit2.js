const orangesRotting = function(grid) {
    if (noFruit(grid)) return 0;
    const queue = findRotten(grid);
    const directions = [[0,1],[0,-1],[1,0],[-1,0]];
    let minutes = 0;
    while (queue.length) {
        let currentLength = queue.length;
        for (let i=0; i<currentLength; i++) {
            let current = queue.shift();
            for (let dir of directions) {
                let candidate = [current[0] + dir[0], current[1] + dir[1]];
                if (checkValidPosition(candidate, grid) && grid[candidate[0]][candidate[1]] === 1) {
                    grid[candidate[0]][candidate[1]] = 2;
                    queue.push(candidate);
                }
            }
        }
        minutes += 1;
    }
    
    return anyRemainingOranges(grid) ? -1 : minutes - 1;
};

const findRotten = function(grid) {
    let coordinates = [];
    
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] === 2) {
                coordinates.push([i,j]);
            }
            
        }
    }
    return coordinates;
}

const checkValidPosition = function(position, grid) {
    if (position[0] < 0 || position[0] >= grid.length) {
        return false;
    }
    
    if (position[1] < 0 || position[1] >= grid[position[0]].length) {
        return false;
    }
    
    return true;
}

const anyRemainingOranges = function(grid) {
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] === 1) {
                return true;
            }
        }
    }
    return false;
}

const noFruit = function(grid) {
    for (let i=0; i<grid.length; i++) {
        for (let j=0; j<grid[i].length; j++) {
            if (grid[i][j] === 1 || grid[i][j] === 2) {
                return false;
            }
        }
    }
    return true;
}