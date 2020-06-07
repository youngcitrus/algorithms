//recursive

var findCircleNum = function(M) {
    const graph = createGraph(M);
    const visited = new Set();
    let numCircles = 0;
    console.log(graph)
    for (let key in graph) {
        if (visited.has(key)) continue;
        
        _depthFirst(key, graph, visited)
        
        numCircles += 1;
        
    }
    console.log(visited)
    return numCircles;
}

function _depthFirst(key, graph, visited) {
    
    if (visited.has(key)) return;
    visited.add(key);
    graph[key].forEach(friend => {
           _depthFirst(friend, graph, visited);
    })
}

function createGraph(matrix) {
    const graph = {};
    for (let i=0; i<matrix.length; i++) {
        for (let j=0; j<matrix[0].length; j++) {
            if (matrix[i][j] === 0) continue;
            if (!(i in graph)) graph[i] = [];
            graph[i].push(`${j}`);
        }
    }
    return graph;
}