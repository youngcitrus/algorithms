var checkRecord = function(s) {
    let lateStreak = 0;
    let absences = 0;
    
    for (let i=0; i<s.length; i++) {
        let char = s[i];
        if (char === 'P') {
            lateStreak = 0;
        } else if (char === 'A') {
            absences += 1;
            if (absences >= 2) return false;
            lateStreak = 0;
        } else {
            lateStreak += 1;
            if (lateStreak >= 3) return false;
        }
    }
    return true;
};