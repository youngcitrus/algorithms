function getPermutations(array) {
    // Write your code here.
      if (array.length <= 1) return [array];
      const results = [];
      const first = array.pop();
      const prevPerms = getPermutations(array);
      for (perm of prevPerms){
          for (let i=0; i<=prevPerms.length; i++){
              let nextPerm = perm.slice(0,i).concat([first]).concat(perm.slice(i));
              results.push(nextPerm)
          }
      }
    return results.sort();
}

const test = [1,2,3];
console.log(getPermutations(test));