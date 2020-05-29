function sum(...nums) {
    return nums.reduce((acc, el) => (acc += el))
}

console.log(sum(1,2,3,4))

Function.prototype.myBind = function(context, ...bindArgs) {
    let fn = this;
    return function(...callArgs) {
        fn.call(context, ...bindArgs.concat(callArgs))
    }
}

function curriedSum(num) {
    const numbers = [];
    function _curriedSum(n) {
        numbers.push(n);
        if (numbers.length === num) {
            return numbers.reduce((acc, el) => (acc += el));
        } else {
            return _curriedSum;
        }
    }
    return _curriedSum;
}

Function.prototype.curry = function(numArgs) {
    let fn = this;
    const args = [];
    function _curry(...callArgs) {
        args.push(...callArgs);
        if (args.length >= numArgs) {
            return fn(...args);
        } else {
            return _curry;
        }
    }
    return _curry;
}

function sum(...nums) {
    let ans = 0;
    nums.forEach(num => (ans += num));
    return ans;
}

