var largestTimeFromDigits = function(A) {
    let allPerms = permutations(A);
    let best = undefined;
    let bestTime = -Infinity;
    
    for (let perm of allPerms) {
        let hours = perm[0] * 10 + perm[1];
        let minutes = perm[2]*10 + perm[3];
        
        if (hours > 23 || minutes > 59) continue;
        let totalTime = hours*60 + minutes;
        if (best === undefined || totalTime > bestTime) {
            best = perm;
            bestTime = totalTime;
        }
        
    };
    
    if (best === undefined) return "";
    else return `${best[0]}${best[1]}:${best[2]}${best[3]}`;
};

function permutations(array) {
    if (array.length <= 1) return [array];
    const result = [];
    const first = array.pop();
    const prevPerms = permutations(array);
    prevPerms.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            let newPerm = perm.slice(0,i).concat([first]).concat(perm.slice(i));
            result.push(newPerm);
        }
    })
    return result;
}