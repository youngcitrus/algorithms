function stringRotation(s1, s2) {
    if (s1.length === s2.length && s1.length) {
      let doubledString = s1 + s1;
      return doubledString.includes(s2);
    }
    return false;
  }
  
  console.log(stringRotation('waterbottle', 'erbottlewat'), true);
  console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
  console.log(stringRotation('aaata', 'aataa'), true);