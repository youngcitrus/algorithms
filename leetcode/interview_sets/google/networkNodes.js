var networkDelayTime = function(times, N, K) {
    const nodes = createGraph(N, times);
    const unvisited = Object.values(nodes);
    nodes[K].time = 0;
    let maxTime = 0;
    
    while (unvisited.length) {
        const node = popSmallestTime(unvisited); 
        maxTime = node.time;
        node.next.forEach(([next, weight]) => {
            if ((node.time + weight) < next.time) {
                next.time = node.time + weight;
            }
        })
    }
    
    
    return maxTime === Infinity ? -1 : maxTime;
};

function Node(val) {
    this.val = val;
    this.next = [];
    this.time = Infinity;
}

function popSmallestTime(list) {
    list.sort((a, b) => a.time - b.time);
    return list.shift();
}

function createGraph(numNodes, edges) {
    const nodes = {};
    for (let i=1; i<=numNodes; i++) {
        nodes[i] = new Node(i);
    }
    
    edges.forEach(([u, v, w]) => {
        nodes[u].next.push([nodes[v], w]);
    })
    return nodes;
}
