function reverse (A, i) {
    let start = 0;
    while (start < i) {
        const temp = A[start];
        A[start] = A[i];
        A[i] = temp;
        start++;
        i--;
    }
}

var pancakeSort = function(A) {

    let sum = [];
    for (let max = A.length; max > 0; max--) {
        let i = 0;
        while (A[i] !== max && i < max) {
            i++;
        }
        reverse(A, i);
        sum.push(i + 1);
        reverse(A, max - 1);
        sum.push(max);
    }
    return sum;
};