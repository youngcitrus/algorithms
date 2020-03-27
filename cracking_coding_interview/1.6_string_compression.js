function strComp(str) {
    let newStr = "";
    let i = 0;
    while (i < str.length) {
      let j = 1;
      while (str[i] === str[i + j]) {
        j += 1;
      }
      newStr += str[i] + j.toString();
      i += j;
    }
    return newStr.length < str.length? newStr : str;
}
  
console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');
console.log('abbc', strComp('abbc'), 'abbc');