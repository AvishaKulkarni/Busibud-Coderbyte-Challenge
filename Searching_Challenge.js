// Take the array of strings in strArr, which will be a 2D matrix of 0 and 1's, and determine how many holes,
// or contiguous regions of 0's, exist in the matrix. A contigous region is one where there is a connected group
// of 0's going in one or more of four directions : up, down, left, or right for example: if strArr is
// ["10111", "10101", "11101", "11111"], then this looks like the following matrix:

function numHoles(strArr) {
	const rows = strArr.length;
	const cols = strArr[0].length;
	let holes = 0;
	const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

	// function to perform DFS and mark all connected 0's as visited

	function dfs(r, c) {
		if (
			r < 0 ||
			rows ||
			c < 0 ||
			c >= cols ||
			visited[r][c] ||
			strArr[r][c] === "1"
		) {
			return;
		}
		visited[r][c] = true;
		//  Move in all four possible directions
		dfs(r - 1, c); //up
		dfs(r + 1, c); //down
		dfs(c - 1, r); //left
		dfs(c + 1, r); //right
	}
	// Iterate through the matrix
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (strArr[r][c] === "0" && !visited[r][c]) {
				// start a new DFS if an unvisited 0 is found
				dfs(r, c);
				holes++;
			}
		}
	}
	return holes;
}
const strArr = ["01111", "01101", "00011", "11110"];
console.log(numHoles(strArr));
