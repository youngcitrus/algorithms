var lengthLongestPath = function(input) {
    let lines = input.split('\n');
    let fileIndexes = [];
    const bestPaths = [];
    
    for (let i=0; i<lines.length; i++) {
        if (lines[i].includes('.')) {
            fileIndexes.push(i);
        }
    }
    if (fileIndexes.length === 0) return 0;

    console.log(fileIndexes)

    fileIndexes.forEach(fileIndex => {
        let path = [lines[fileIndex]];
        let numTabs = findNumTabs(lines[fileIndex]);
        let lookingFor = numTabs - 1;
        for (let i=fileIndex - 1; i >= 0 && lookingFor >= 0; i--) {
            if (findNumTabs(lines[i]) === lookingFor) {
                path.push(lines[i]);
                lookingFor -= 1;    
            }
        }
        
        path = path.reverse().map(string => {
            let tabIndex = -1;
            for (let i = 0; i < string.length; i++) {
                if (string[i] === '\t') tabIndex = i;
            }
            return string.slice(tabIndex + 1);
        })
        
        bestPaths.push(path.join("/"))
    });

    bestPaths.sort((a,b) => (b.length - a.length))
    console.log(bestPaths);
    return bestPaths[0].length;
};

function findNumTabs(string) {
    let currentNumTabs = 0;
    for (let i=0; i < string.length; i++) {
        if (string[i] === '\t') {
            currentNumTabs += 1;
        }
    }
    return currentNumTabs;
}