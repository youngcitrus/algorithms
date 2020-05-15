var subdomainVisits = function(cpdomains) {
    const countHash = {};
    for (let string of cpdomains) {
        let cpTuple = string.split(" ");
        let numVisits = parseInt(cpTuple[0]);
        let domains = [];
        let subDomains = cpTuple[1].split(".");
        for (let i=0; i<subDomains.length; i++) {
            domains.push(subDomains.slice(i).join('.'))
        }
        for (let domain of domains) {
            if (domain in countHash) countHash[domain] += numVisits;
            else countHash[domain] = numVisits;
        }
    }
    const result = [];
    for (let address in countHash) {
        let cpString = countHash[address].toString() + " " + address;
        result.push(cpString);
    }
    return result;
    
};

//O(n * l) where n is number of input strings and l is the length of the domain addresses