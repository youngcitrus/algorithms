function solution1(param) {
  let result = [];
  for (let i = 0; i < param.length; i++) {
    result[i] = i + 1;
  }
  return result;
}

function solution2(arr, N) {
    let result = [];
    // arr = [4,5,2]
    let table = new Array(N+1).fill(0); // [0 0 1 0 1 1]
    for (let i=0; i<arr.length; i++) {
      table[arr[i]] += 1;
    }
    let i = 1;
    while (i < table.length) {
      if (table[i] !== 0) {
        for (let j=0; j<table[i]; j++)
        result.push(i);
        i += table[i]
      } else {
        i += 1;
      }
      
    }
    return result;
  }
  
  
  const test1 = [4,4,2];
  const test2 = [1,6,2,2,5];
  const test3 = [1];
  const test4 = [3,2];
  
  console.log(solution2(test1, 5));
  console.log(solution2(test2, 6));
  console.log(solution2(test3, 1));
  console.log(solution2(test4, 3));
  
  /*
  Part 2: Say that I give you an array of length n with numbers in the range 1..N (N >= n).
  Sort this array in O(n + N) time. You may use O(N) memory.
  
  n = 3
  N = 5
  [ 4, 5, 2 ]
    0  1  2
  
  [ ]
  
  [0 1 2 3 4 5]
  [0 0 2 0 4 5]
  [2 4 5]
  
  */
/*
 Part 3: Say I give you an array of n strings, each of length k. 
 I claim that, using merge sort, you can sort this in O(knlog(n)),
 since comparing a pair of strings takes O(k) time.
 I want you to beat that. Sort the strings in O(kn). Hint: do not compare any two strings.
 You may assume all strings contain only lowercase letters a..z without whitespace or punctuation.
 */

function solution3(strings, k) {
    for (let i=k-1; i>=0; i--) {
        let buckets = new Array(26);
        for (let i=0; i<buckets.length; i++) {
            buckets[i] = [];
        }
        strings.forEach(string => {
            let letter = string[i];
            buckets[letter.chardCodeAt(0) - 'a'.charCodeAt(0)].push(string);
        });

        strings = [];
        buckets.forEach(bucket => {
            bucket.forEach(string => {
                strings.push(string);
            })
        })
    }

    return strings;
}

