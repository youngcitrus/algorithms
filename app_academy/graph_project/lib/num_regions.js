function numRegions(graph) {
    let numSections = 0;
    let visited = new Set();
    for (key in graph) {
        if (!visited.has(key)) visited.add(key);
        let flag = true;
        graph[key].forEach(neighbor => {
            if (visited.has(neighbor)) flag = false;
        })
        if (flag) {
            numSections += 1;
        }
    }
    return numSections;
}

module.exports = {
    numRegions
};