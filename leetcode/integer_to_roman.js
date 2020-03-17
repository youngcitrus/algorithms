var intToRoman = function(num) {

    const chars = [];
    helper(num, chars);
    
    return chars.join("");
};

var helper = function(num, chars) {
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const hash = {1000: "M",
                  900: "CM",
                  500: "D",
                  400: "CD",
                  100: "C",
                  90: "XC",
                  50: "L",
                  40: "XL",
                  10: "X",
                  9: "IX",
                  5: "V",
                  4: "IV",
                  1: "I"
                 };
    for (const value of values) {
        while (num >= value) {
            chars.push(hash[value]);
            num -= value
        }
    }
}