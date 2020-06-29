var hammingWeight = function(n) {
    const number = parseInt(n);
    let count = 0;
    let numArray = [1];
    
    for (let i=2; i<=number; i++) {
        increaseBinary(numArray)
    }
    
    for (let i=0; i<numArray.length; i++) {
        if (numArray[i] === 1) {
            count += 1;
        }
    }
    return count;
};

function increaseBinary(arr) {
    let i = arr.length - 1;
    let flag = false;
    while (i >= 0) {
        if (arr[i] === 0) {
            arr[i] = 1;
            break;
        } else if (i === 0) {
            arr[i] = 1;
            flag = true;
            break;
        }
        i -= 1;
    }
    i += 1;
    while (i < arr.length) {
        arr[i] = 0;
        i += 1;
    }
    if (flag) {
        arr.push(0);
    }
}