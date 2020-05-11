Function.prototype.myThrottle = function(interval) {
    let tooSoon = false;
    const fn = this;
    return function(...args){
        if (!tooSoon) {
            fn(...args);
            tooSoon = true;
            setTimeout(()=>{
                tooSoon = false;
            }, interval)
        }
    }
};

Function.prototype.myDebounce = function(interval) {
    let fn = this;
    let timeout;
    return function(...args) {
        const fnCall = () => {
            timeout = null;
            fn(...args);
        }
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, interval);
    }
    
}