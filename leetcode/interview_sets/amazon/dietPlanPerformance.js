var dietPlanPerformance = function(calories, k, lower, upper) {
    let points = 0;
    for (let i=0; i<calories.length - k + 1; i++) {
        let sum = 0;
        for (let j=0; j< k; j++) {
            sum += calories[i + j];
        }
        if (sum < lower) points -= 1;
        else if (sum > upper) points += 1;
    }
    return points;
};