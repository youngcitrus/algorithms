var partitionLabels = function(S) {
    if (!S.length) return null;
    const lastIndices = new Array(26);
    for (let i=0; i<S.length; i++) {
        let index = 97 - S.charCodeAt(i);
        lastIndices[index] = i;
    }
    const output = [];
    let start = 0;
    let end = 0;
    for (let i=0; i<S.length; i++) {
        let index = 97 - S.charCodeAt(i);
        end = Math.max(end, lastIndices[index]);
        if (i === end) {
            output.push(end - start + 1);
            start = end + 1;
        }
    }
    return output;
};