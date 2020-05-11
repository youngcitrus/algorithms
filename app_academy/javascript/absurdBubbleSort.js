const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
    reader.question(`Is ${el1} greater than ${el2}? `, (res) => {
        if (res === 'yes') {
            callback(true);
        } else if (res === 'no') {
            callback(false);
        } else {
            askIfGreaterThan(el1, el2, callback);
        }
    });
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], function(isGreaterThan){
            if (isGreaterThan) {
                let temp = arr[i + 1];
                arr[i + 1] = arr[i];
                arr[i] = temp;
                madeAnySwaps = true;
            }
            innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        });
    } else if (i === arr.length - 1) {
        outerBubbleSortLoop(madeAnySwaps);
    }
}

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        console.log('in outer bubble sort');
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr);
        }
    }

    outerBubbleSortLoop(true);
}

function sortCompletionCallback(arr) {
    console.log('array is sorted');
    console.log(arr);
    reader.close();
}

absurdBubbleSort([11,3,2], sortCompletionCallback);