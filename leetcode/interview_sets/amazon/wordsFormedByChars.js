var countCharacters = function(words, chars) {
    const goodWords = [];
    charsHash = {};
    for (let i=0; i<chars.length; i++) {
        if (chars[i] in charsHash) charsHash[chars[i]] += 1;
        else charsHash[chars[i]] = 1;
    }
    words.forEach(word => {
        let wordHash = {};
        
        for (let i=0; i<word.length; i++) {
            if (word[i] in wordHash) wordHash[word[i]] += 1;
            else wordHash[word[i]] = 1;
        }

        for (let j=0; j<word.length; j++) {
            if (!(word[j] in charsHash && wordHash[word[j]] <= charsHash[word[j]])) {
                return
            }
        }
        goodWords.push(word);
    })
    return goodWords.length > 0 ? goodWords.map(word => word.length).reduce((acc, el) => acc += el) : 0;
};