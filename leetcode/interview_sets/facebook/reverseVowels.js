var reverseVowels = function(s) {
    const letters = s.split('');
    let left = 0;
    let right = s.length - 1;
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U'])
    while (left < right) {
        while (!vowels.has(letters[left]) && left < right) {
            left += 1;
        }
        while (!vowels.has(letters[right]) && left < right) {
            right -= 1;
        }
        swap(left, right, letters);
        left += 1;
        right -= 1;
    }
    return letters.join('');
};

function swap(i, j, array) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}