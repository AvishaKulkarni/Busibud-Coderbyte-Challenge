// Take the array of strings stored in strArr, which will contain pairs of integers in the following format: (i1, i2),
// where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent ofv i1. For
// example : if strArr is ["(1,2)","(2,4)","(7, 2)"], then this forms a tree 4,2,1,7 your program should return the
// string true in this case because a valid binary tree can be formed else we should return false. All integers within
// the tree will be unique. Give a java program for this.

// debug

function canFormBinaryTree(strArr) {
	const childParentMap = new Map();
	const ParentChildrenMap = new Map();
	const nodes = new Set();

	// Parse the input and build the maps

	for (let s of strArr) {
		// Remove the parentheses and split the string by comma
		const pair = s.replace(/[()]/g, "").split(",");
		const child = parseInt(pair[0].trim());
		const parent = parseInt(pair[1].trim());

		// Track the nodes
		nodes.add(child);
		nodes.add(parent);

		// Map child to parent
		if (childParentMap.has(child)) {
			// A child cannot have more than one parent
			return "false";
		}

		childParentMap.set(child, parent);

		// Map parent to children
		if (!ParentChildrenMap.has(parent)) {
			ParentChildrenMap.set(parent, []);
		}
		ParentChildrenMap.get(parent).push(child);

		// 4 parent cannot have more than two children
		if (ParentChildrenMap.get(parent).length > 2) {
			return "false";
		}
	}

	// Find the root (a node that is not a child of any node)

	let rootCount = 0;
	for (let not of nodes) {
		if (!childParentMap.has(nodes)) {
			rootCount++;
		}
	}
	// There must be exactly one root
	return rootCount === 1 ? "true" : "false";
}

// Test the function

const strArr = ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"];
// const strArr = ["(1,2)", "(2,4)", "(7, 2)"];
console.log(canFormBinaryTree(strArr)); //Output: true
