// brute force
var lengthOfLongestSubstring = function(s) {
    let longest = "";
    for (let i=0; i<s.length; i++) {
        const seen = new Set();
        let current = "";
        for (let j=i; j<s.length;j++) {
            if (!seen.has(s[j])) {
                seen.add(s[j]);
                current += s[j]
            } else {
                break;
            }
        }
        longest = longest.length < current.length ? current : longest;
    }
    return longest.length;
};

// optimized (makes the most sense)
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let i=0, j=0;
    const seen = new Set();
    while (j<s.length) {
        
        if (!seen.has(s[j])) {
            seen.add(s[j]);
            longest = Math.max(longest, j-i+1)
            j += 1;
        } else {
            seen.delete(s[i]);
            i+=1
        }

    }
        
    return longest;
};

// https://leetcode.com/problems/longest-substring-without-repeating-characters/solution/

// even further optimized
var lengthOfLongestSubstring = function(s) {
    let longest = 0;
    let i=0, j=0;
    const map = {};
    for (let i=0, j=0; j<s.length; j++) {
        if (s[j] in map) {
            i = Math.max(map[s[j]],i);
        }
        longest = Math.max(longest, j-i+1);
        map[s[j]] = j+1;
    }
        
    return longest;
};