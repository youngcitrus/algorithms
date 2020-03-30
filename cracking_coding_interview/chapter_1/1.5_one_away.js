// function oneAway(s1, s2) {
//   const hash = {};
//    for (const ch of s1) {
//      if (ch in hash) hash[ch] += 1;
//      else hash[ch] = 1;
//    }
//    for (const ch of s2) {
//      if (ch in hash) hash[ch] -= 1;
//      else hash[ch] = 1;
//    }
//    const moreThanOne = Object.values(hash).filter(val => val > 0);
//    return moreThanOne.length < 3;
// }

function oneAway(s1, s2) {
    if (s1.length === s2.length) {
      return oneEditReplace(s1, s2);
    } else if (s1.length + 1 === s2.length) {
      return oneEditInsert(s1, s2);
    } else if (s1.length === s2.length + 1) {
      return oneEditInsert(s2, s1);
    }
    return false;
  }
  
  function oneEditReplace(s1, s2) {
    let foundDifference = false;
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) {
        if (foundDifference) return false;
        foundDifference = true;
      }
    }
    return true;
  }
  
  function oneEditInsert(s1, s2) {
    let index1 = 0;
    let index2 = 0;
    while (index1 < s1.length && index2 < s2.length) {
      if (s1[index1] !== s2[index2]) {
        if (index1 !== index2) return false;
        index2 += 1;
      } else {
        index1 += 1;
        index2 += 2;
      }
    }
    return true;
  }
  
  console.log(oneAway('pale', 'ple'), true);
  console.log(oneAway('pales', 'pale'), true);
  console.log(oneAway('pale', 'bale'), true);
  console.log(oneAway('pale', 'bake'), false);