function flattenArray(arr) {
    
    const flattened = [];
    arr.forEach(el => {
        if (!Array.isArray(el)) {
            flattened.push(el)
        } else {
            flattened.push(...flattenArray(el));
        }
    })

    return flattened;
}

const a = [1,2,3,[4,5,[6]]];
console.log(flattenArray(a));