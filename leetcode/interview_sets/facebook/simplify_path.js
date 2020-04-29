var simplifyPath = function(path) {
    const pathArray = path.split('/');
    const result = [];
    pathArray.forEach(el => {
        if (el === '..') {
            if (!result.length) {
                return '/';
            } else {
                result.pop();
            }
        } else if (el !== '' && el !== '.') {
            result.push(el);
        }
    });
    
    return '/' + result.join('/');
    
};