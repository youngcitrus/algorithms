//refactored/slightly optimized

var cutOffTree = function(forest) {
    let steps = 0;
    let curPos = [0,0]
    let allTrees = findAllTreesSorted(forest);

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
    
    if (position1[0] === position2[0] && position1[1] === position2[1]) {
        return 0;
    }
    
    let steps = 0;
    const visited = {};
    const directions = [ [1,0], [0,1], [-1,0], [0,-1] ];
    
    
    const queue = [position1];
    while (queue.length) {
        let length = queue.length;
        for (let i=0; i<length; i++) {
            let current = queue.shift();
            if (current[0] === position2[0] && current[1] === position2[1]) {
                return steps;
            }
            for (let dir of directions) {
                let newPos = [current[0] + dir[0], current[1] + dir[1]];

                if (isValid(newPos, forest) && !(newPos in visited)) {
                    queue.push(newPos);
                }
            }
            visited[current] = true;
        }
        steps += 1;
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
