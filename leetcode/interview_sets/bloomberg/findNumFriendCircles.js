//iterative

var findCircleNum = function(M) {
    const graph = createGraph(M);
    console.log(graph);
    const visited = new Set();
    let numCircles = 0;
    for (let key in graph) {
        if (!visited.has(parseInt(key))) {
            visited.add(parseInt(key));
            console.log(visited)
            numCircles += 1;
        }
        const stack = graph[key];
        while (stack.length) {
            let current = stack.pop();
            if (visited.has(current)) continue;
            visited.add(current);
            
            graph[current].forEach(friend => {
               stack.push(friend); 
            });
            
        }
    }
    return numCircles;
}

function createGraph(matrix) {
    const graph = {};
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[0].length; j++) {
            if (matrix[i][j] === 0) continue;
            if (!(i in graph)) graph[i] = [];
            graph[i].push(j);
        }
    }
    return graph;
}