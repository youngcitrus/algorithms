var canPermutePalindrome = function(s) {
    if (s.length === 0) return false;
    const charCount = {};
    for (let i=0; i<s.length; i++) {
        let char = s[i];
        if (char in charCount) charCount[char] += 1;
        else charCount[char] = 1;
    }
    let isEven = (s.length % 2 === 0);
    let counts = Object.values(charCount).filter(count => (count % 2 === 1));
    console.log(counts)
    console.log(charCount)
    if (counts.length > 1) return false;
    if (isEven && counts.length > 0) return false;
    return true;
};