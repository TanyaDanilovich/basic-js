const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	const newArr = arr.reduce((part, el) => {

		if (el === -1) return part;
		part.push(el);

		return part;
	}, []).sort((a, b) => a - b);


	arr.forEach((el, i) => {
		if (el === -1) newArr.splice(i, 0, -1);
	})
	return newArr;
}

module.exports = {
	sortByHeight
};
