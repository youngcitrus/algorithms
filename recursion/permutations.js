/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
const permutations = arr => {
    if (arr.length <= 1) return [arr];
    const last = arr[arr.length - 1]
    const prevPerms = permutations(arr.slice(0, arr.length - 1));
    const allPerms = [];
    prevPerms.forEach(perm => {
        for (let i = 0; i <= perm.length; i++) {
            let newPerm = [...perm.slice(0, i), last, ...perm.slice(i)];
            allPerms.push(newPerm);
        }
    });
    return allPerms;
}