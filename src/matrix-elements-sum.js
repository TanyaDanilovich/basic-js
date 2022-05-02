const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
	//console.log(matrix);
	let sum = 0;
	let arr = [];
	for (let i = 0; i < matrix[0].length; i++) {
		let columnArr = [];
		for (let j = 0; j < matrix.length; j++) {
			columnArr.push(matrix[j][i])
		}
		arr.push(columnArr);
	}
	for (let el of arr) {
		for (let e of el) {
			if (e === 0) break;
			sum += e;
		}
	}
	return sum;
}

module.exports = {
	getMatrixElementsSum
};
