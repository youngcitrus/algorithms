// https://leetcode.com/problems/longest-substring-without-repeating-characters/

var lengthOfLongestSubstring = function(s) {
    const map = {};
    let longestLength = 0;
    let start = 0, end = 0;
    while (end < s.length) {
        let char = s[end];
        if (char in map && !(start > map[char])) {
            start = map[char] + 1;
            map[char] = end;
        } else {
            map[char] = end;
        }
        let substr = s.slice(start, end + 1);
        if (substr.length > longestLength) {
            longestLength = substr.length;
        }
        end += 1;
    }
    return longestLength;
};