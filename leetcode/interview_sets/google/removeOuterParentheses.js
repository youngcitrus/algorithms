var removeOuterParentheses = function(S) {
    let open = 0; 
    let closed = 0;
    const decomposed = [];
    let i = 0;
    while (i < S.length) {
        if (S[i] === '(') open += 1;
        if (S[i] === ')') closed += 1;
        if (open === closed) {
            decomposed.push(S.slice(0,i+1));
            S = S.slice(i+1);
            i = 0;
            continue;
        }
        i += 1;
    }
    
    const removed = decomposed.map(string => (string.slice(1,string.length - 1)));
    return removed.join("");
    
};