var arraysIntersection = function(arr1, arr2, arr3) {
    let [p1, p2, p3] = [0, 0, 0];
    const result = [];
    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
        if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
            result.push(arr1[p1]);
            p1 += 1;
            p2 += 1;
            p3 += 1;
        } else {
            let smallest = findSmallest([arr1[p1], arr2[p2], arr3[p3]]);
            if (arr1[p1] === smallest) p1 += 1;
            if (arr2[p2] === smallest) p2 += 1;
            if (arr3[p3] === smallest) p3 += 1;
        }
    }
    return result;
};

function findSmallest(arr) {
    let smallest = Infinity;
    for (let i=0; i<arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i]
        }
    }
    return smallest;
}