/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
function flatten(array) {
    const flat = [];
    if (array.length === 0) return flat;
    array.forEach(el => {
        if (!Array.isArray(el)) flat.push(el);
        else flat.push(...flatten(el));
    })
    return flat;
}