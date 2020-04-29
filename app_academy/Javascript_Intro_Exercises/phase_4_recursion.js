function range(start, end) {
    if ((end - start) <= -1) return [];
    
    return [start, ...range(start + 1, end)];
};

function sumRec(array) {
    if (array.length === 0) return 0;
    return array[0] + sumRec(array.slice(1));
};

function exponent(base, exp) {
    if (exp === 0) return 1;
    if (exp <= 0) return 1 / (base * exponent(base, exp * -1 - 1))
    return base * exponent(base, exp - 1);
};

function fibonacci(n) {
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let previous = fibonacci(n-1);
    previous.push(previous[previous.length - 2] + previous[previous.length - 1]);
    return previous;
};

function deepDup(array) {
    if (!(Array.isArray(array))) {
        return array;
    }
    return array.map((el) => {
        return deepDup(el);
    });
};

function bsearch(arr, target) {
    if (arr.length === 0) return -1;
    let mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) return mid;
    else if (target < arr[mid]) {
        let left = arr.slice(0,mid);
        return bsearch(left, target);
    } else if (target > arr[mid]) {
        let right = arr.slice(mid + 1);
        let rightResult = bsearch(right, target);
        return rightResult === -1 ? -1 : rightResult + mid + 1;
    }
}

function mergeSort(array) {
    if (array.length <= 1) return array;
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(arr1, arr2) {
    let sorted = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            sorted.push(arr1.shift());
        } else {
            sorted.push(arr2.shift());
        }
    }
    return [...sorted,...arr1,...arr2];
}

function subsets(array) {
    if (array.length === 0) {
        return [[]];
    }
    const first = array[0];
    const withoutFirst = subsets(array.slice(1));
    const withFirst = withoutFirst.map(sub => [first].concat(sub));

    return withoutFirst.concat(withFirst);

}