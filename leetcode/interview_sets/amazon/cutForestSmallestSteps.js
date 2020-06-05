var cutOffTree = function(forest) {
    let steps = 0;
    let curPos = [0,0]
    let smallestTree = findSmallestTree(forest)
    while (true) {
        
        let distance = getShortestDistance(curPos, smallestTree, forest);
        if (distance === -1) return -1;
        forest[smallestTree[0]][smallestTree[1]] = 1;
        curPos = smallestTree;
        steps += distance;
        smallestTree = findSmallestTree(forest);
        if (smallestTree.length === 0) break;
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
            for (let dir of directions) {
                let newPos = [current[0] + dir[0], current[1] + dir[1]];

                if (newPos[0] === position2[0] && newPos[1] === position2[1]) {
                    return steps + 1;
                }
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

function findSmallestTree(forest) {
    let smallest = Infinity;
    let smallestPosition = [];
    
    for (let row=0; row < forest.length; row++) {
        for (let col=0; col < forest[0].length; col++) {
            if (forest[row][col] > 1 && forest[row][col] < smallest) {
                smallest = forest[row][col];
                smallestPosition = [row, col];
            }
        }
    }
    
    return smallestPosition;
}

function noMoreTrees(forest) {
    for (let row=0; row<forest.length; row++) {
        for (let col=0; col<forest[0].length; col++) {
            if (forest[row][col] > 1) {
                return false;
            }
        }
    }
    return true;
}


//  https://leetcode.com/problems/cut-off-trees-for-golf-event/