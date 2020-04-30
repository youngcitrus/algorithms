var uncommonFromSentences = function(A, B) {
    let hash = {};
    const words = A.split(" ").concat(B.split(" "));
    
    words.forEach(word => {
        if (word in hash) {
            hash[word] += 1;
        } else {
            hash[word] = 1;
        }
    });
    
    const uncommonWords = [];
    for (let word in hash) {
        if (hash[word] === 1) {
            uncommonWords.push(word);
        }
    }
    return uncommonWords;
};