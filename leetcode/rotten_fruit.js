// In a given grid, each cell can have one of three values:

// the value 0 representing an empty cell;
// the value 1 representing a fresh orange;
// the value 2 representing a rotten orange.
// Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

// [  ]
// 2 shifted: 1
// push 2's neighbors into q
// shift q length times increase level;
// visited array full of [row, column] items


// Input: [[2,2,1],
       //  [2,1,0],
       //  [0,1,1]]
// Output: 4

// [[2,1,1],
//  [0,1,1],
//  [1,0,1]]
// Output: -1


// obj = {}, use an array as key. 
// obj[array] = trues.dlfjaskldj


function oranges(grid) {
  const visited = {};
  const directions = [[-1,0], [0,1], [-1,0], [0,-1]]
  let queue = findRotten(grid, visited);
  let minutes = 0;
  while (queue.length) {
    let currentLength = queue.length;
    for (let i=0; i < currentLength; i++) {
      let rotten = queue.shift();
      
      for (let dir of directions) {
        let candidate = [directions[0] + rotten[0], directions[1] + rotten[1]];
        if (validPosition(candidate) && grid[candidate[0]][candidate[1]] === 1) {
          let candidateString = String(candidate);
          if (!candidateString in visited){
            queue.push(candidate);
            visited[candidateString] = true;
          }
        }
      }
    }
    minutes += 1;
  }
  // (Object.keys(visited)).length + numZeroes === number of grid squares
  return minutes;
}

function findRotten(grid, visited) {
  let coordinates = [];
  for (let row=0; row<grid.length; row++) {
    for (let col=0; col<grid[0].length; col++) {
      if (grid[row][col] === 2) {
        coordinates.push([row, col])
        visited[String([row, col])] = true;
      }
    }
  }
  return coordinates;
}

function validPosition(coordinate, grid) {
  if (coordinate[0] < 0 || coordinate[0] >= grid.length) {
    return false;
  }     
    
  if (coordinate[1]) < 0 || coordinate[1] >= grid[0].length) {
    return false;
  }

  return true;
}

function foobar(grid) {
  let time = -1, queue = [], dirs = [[0, -1], [-1, 0], [0, 1], [1, 0]];
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
    }
  }
  
  while (queue.length) {
    let size = queue.length;
    time++;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      
      for (let j = 0; j < dirs.length; j++) {
        let [r, c] = [curr[0] + dirs[j][0], curr[1] + dirs[j][1]];
        
        if (r >= 0 && c >= 0 && r < grid.length && c < grid[0].length && grid[r][c] === 1) {
          grid[r][c] = 2;
          queue.push([r, c]);
        }
      }
    }
  }
  
  let allEmpty = true;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) return -1;
      else if (grid[i][j] === 2) allEmpty = false;
    }
  }
  
  return allEmpty ? 0 : time;
}