var romanToInt = function(s) {
    let sum = 0;
    const hash = {
                "I": 1,
                "V": 5,
                "X": 10,
                "L": 50,
                "C": 100,
                "D": 500,
                "M": 1000
    }
    for (let i=0; i<s.length; i++) {
        if (i === s.length - 1) {
            sum += hash[s[i]];
        } else if (hash[s[i]] < hash[s[i+1]]) {
            sum -= hash[s[i]];
        } else {
            sum += hash[s[i]]
        }
    }
    return sum;
};

// backwards pass

var romanToInt = function(s) {
    const hash = {
                "I": 1,
                "V": 5,
                "X": 10,
                "L": 50,
                "C": 100,
                "D": 500,
                "M": 1000
    }
   let sum = hash[s[s.length - 1]];
    for (let i = s.length - 2; i >= 0; i--) {
        if (hash[s[i]] < hash[s[i+1]]) {
            sum -= hash[s[i]];
        } else {
            sum += hash[s[i]];
        }
    }
    return sum;
};