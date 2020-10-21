function isSorted(arr) {
    if (arr.length <= 1) return true;

    return (arr[0] < arr[1] && isSorted(arr.slice(1)));
}