/**
 * @param {number[][]} forest
 * @return {number}
 */

// finally fast enough to pass leetcode

var cutOffTree = function(forest) {
    if (!forest.length || !forest[0].length) {
        return 0;
    }
    let allTrees = findAllTreesSorted(forest);
    let curPos = [0,0];
    let steps = 0;
    
    for (let i=0; i<allTrees.length; i++) {
        let curTree = [allTrees[i][0], allTrees[i][1]];
        let distance = getShortestDistance(curPos, curTree, forest);
        if (distance === -1) return -1;
        forest[curTree[0]][curTree[1]] = 1;
        curPos = curTree;
        steps += distance;
    }
    return steps;
};

function getShortestDistance(position1, position2, forest) {
    const distance = [...new Array(forest.length)].map(() => new Array(forest[0].length).fill(Infinity));
    distance[position1[0]][position1[1]] = 0;
    
    const directions = [ [1,0], [0,1], [-1,0], [0,-1] ];
    
    position1.push(0);
    const queue = [position1];
    while (queue.length) {
        let current = queue.shift();
        
        if (current[0] === position2[0] && current[1] === position2[1]) {
            return current[2];
        }
        for (let dir of directions) {
            let newPos = [current[0] + dir[0], current[1] + dir[1], current[2] + 1];
            
            if (isValid(newPos, forest) && newPos[2] < distance[newPos[0]][newPos[1]]) {
                distance[newPos[0]][newPos[1]] = newPos[2];
                queue.push(newPos);
                
            }
        }
        
        
    }
    
    return -1;
}

function isValid(pos, forest) {
    let [row, col] = pos;
    if (row < 0 || row >= forest.length) return false;
    if (col < 0 || col >= forest[0].length) return false;
    if (forest[row][col] === 0) return false;
    return true;
}

function findAllTreesSorted(forest) {
    const result = [];
    for (let row=0; row<forest.length; row++) {
        for (let col=0; col<forest[0].length; col++) {
            if (forest[row][col] > 1) {
                result.push([row, col, forest[row][col]]);
            }
        }
    }
    result.sort((a,b) => a[2] - b[2]);
    return result;
}



