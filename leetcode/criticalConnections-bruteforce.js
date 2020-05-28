/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    answer = [];
    for (let i=0; i<connections.length; i++) {
        let test = connections.slice(0,i).concat(connections.slice(i+1));
        let testGraph = buildGraph(test);
        if (dfs(testGraph).size !== n) {
            answer.push(connections[i])
        }
    }
    return answer;
};

function dfs(graph) {
    const seen = new Set();
    let firstKey = Object.keys(graph)[0];
    const stack = [firstKey]
    while (stack.length) {
        let node = stack.pop();
        if (seen.has(node)) continue;
        seen.add(node);
        graph[node].forEach(neighbor => {
            if (!(seen.has(neighbor))) {
                stack.push(neighbor.toString());
            }
        })
    }
    return seen;
}

function buildGraph(connections) {
    const graph = {};
    for (let connection of connections) {
        if (!(connection[0] in graph)) graph[connection[0]] = [];
        if (!(connection[1] in graph)) graph[connection[1]] = [];
        graph[connection[0]].push(connection[1]);
        graph[connection[1]].push(connection[0]);
    }
    return graph;
}