var reorderLogFiles = function(logs) {
    digitLogs = [];
    letterLogs = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    
    logs.forEach(log => {
        let words = log.split(" ");
        let firstWord = words[1];
        if (alphabet.includes(firstWord[0])) {
            letterLogs.push(log);
        } else if (numbers.includes(firstWord[0])) {
            digitLogs.push(log);
        }
    });
    
    //sort letterLogs
    
    letterLogs.sort((log1, log2) => {
        let words1 = log1.split(" ");
        let words2 = log2.split(" ");
        let id1 = words1[0];
        let id2 = words2[0];
        let string1 = words1.slice(1).join(" ");
        let string2 = words2.slice(1).join(" ");

        if (string1 === string2) {
            if (id1 > id2) return 1;
            else if (id1 < id2) return -1;
            else return 0;
        } else {
            if (string1 < string2) return -1;
            else if (string1 > string2) return 1;
            else return 0;
        }
    });
   
    return [...letterLogs, ...digitLogs];
};