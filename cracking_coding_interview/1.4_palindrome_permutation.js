function palindromePermutation(str) {
    // count all characters in hash
    // only 1 odd number of letter count is allowed
    // iterate through hash and count occurrences of odd value
    str = str.split(' ').join('').toLowerCase();
    const letters = {};
    for (let i = 0; i < str.length; i++) {
      let char = str[i]
      if (char in letters) letters[char] += 1;
      else letters[char] = 1;
    }
    let oddCount = 0;
    for (const key in letters) {
      if (letters[key] % 2 === 1) oddCount += 1;
    }
    
    return oddCount > 1 ? false : true;
  }
  
  console.log(palindromePermutation('Tact Coa'), 'true');
  console.log(palindromePermutation('Tact boa'), 'false');