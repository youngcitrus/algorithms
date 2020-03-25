function checkPermute(str1, str2) {
    if (str1.length !== str2.length) return false;
    const letters = {};
    for (const char of str1) {
      if (char in letters) letters[char]++;
      else letters[char] = 1;
    }
    for (const char of str2) {
      if (!(char in letters)) {
        return false;
      } else {
        letters[char]--;
        if (letters[char] < 0) return false;
      }
    }
    return true;
  }
  
  
  console.log(checkPermute('aba', 'aab'), true);
  
  console.log(checkPermute('aba', 'aaba'), false);
  
  console.log(checkPermute('aba', 'aa'), false);