const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {

	//	console.log(names);
	let res = names.reduce((acc, el) => {
		console.log(acc);
		let localName = el;
		let i = 0;
		while (acc.includes(localName)) {
			i++;
			localName = el + `(${i})`
		}
		acc.push(localName);
		return acc;
	}, [])
	return res;
}

module.exports = {
	renameFiles
};
