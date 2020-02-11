function levenshteinDistance(str1, str2) {
	let twoDArray = [];
	for (let i = 0; i < str1.length + 1; i++) {
		const row = [];
		twoDArray.push(row);
	}
	for (let j = 0; j < str2.length + 1; j++) {
		twoDArray[0][j] = j;
	}
	for (let k = 0; k < str1.length + 1; k++) {
		twoDArray[k][0] = k;
	}
	for (let x = 1; x < str1.length + 1; x++) {
		for (let y = 1; y < str2.length + 1; y++) {
			let candidate = Math.min(twoDArray[x - 1][y - 1], twoDArray[x - 1][y], twoDArray[x][y - 1]);
			if (str1[x-1] === str2[y-1]) {
				twoDArray[x][y] = twoDArray[x-1][y-1];
			} else {
				twoDArray[x][y] = candidate + 1;
			}
		}
	}
	return twoDArray[str1.length][str2.length];
}