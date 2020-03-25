function everyCharUnique(str) {
    const seen = [];
    for (let i = 0; i < str.length; i++) {
      if (seen.includes(str[i])) return false;
      else seen.push(str[i]);
    }
    return true;
  }
  
  
  console.log(everyCharUnique('abcd'), 'true');
  console.log(everyCharUnique('abccd'), 'false');
  console.log(everyCharUnique('bhjjb'), 'false');
  console.log(everyCharUnique('mdjq'), 'true');