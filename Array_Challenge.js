//  Take the string parameter being passed and determine the largest number of unique characters that exists between a pair of matching letters
//  anywhere in the string. For example: if string is "ahyjakh" then there are only two pairs of matching letters, the two a's and the two h's
// Between the pair of a's there are 3 unique characters : h, y and j. Between the h's there are 4 unique characters: y, j, a and k. So for this
// example your program should return 4.

function largestUniqueCharacter(str) {
	let maxUnique = 0;
	const charPositions = {};

	// Record the positions of each character

	for (let i = 0; i < str.length; i++) {
		if (!charPositions[str[i]]) {
			charPositions[str[i]] = [];
		}
		charPositions[str[i]].push(i);
	}

	// Iterarte over each character's positions

	for (let char in charPositions) {
		const positions = charPositions[char];
		if (positions.length > 1) {
			for (let i = 0; i < positions.length - 1; i++) {
				for (let j = i + 1; j < positions.length; j++) {
					const substring = str.substring(positions[i] + 1, positions[j]);
					const uniqueChars = new Set(substring);
					maxUnique = Math.max(maxUnique, uniqueChars.size);
				}
			}
		}
	}
	return maxUnique;
}

const str = "mmmerme";
console.log(largestUniqueCharacter(str));
