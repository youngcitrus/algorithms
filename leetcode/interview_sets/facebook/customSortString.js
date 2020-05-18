var customSortString = function(S, T) {
    const countT = {};
    for (let i=0; i<T.length; i++) {
        let char = T[i];
        if (char in countT) countT[char] += 1;
        else countT[char] = 1;
    }
    let answer = [];
    for (let j=0; j<S.length; j++) {
        for (let k=0; k<countT[S[j]]; k++) {
            answer.push(S[j]);
        }
        countT[S[j]] = 0;
    }
    for (let char in countT) {
        if (countT[char] > 0);
        for (let l=0; l<countT[char]; l++) {
            answer.push(char);
        }
    }
    return answer.join('');
};

/*
var customSortString = function(S, T) {
    const lettersS = S.split('');
    const lettersT = T.split('');
    lettersT.sort((a,b) => {
        return lettersS.indexOf(a) - lettersS.indexOf(b);
    })
    return lettersT.join('');
};
*/