const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	let teamName = [];
	if (Array.isArray(members) && members.length > 0) {

		members.forEach((el) => {
			if (typeof (el) === 'string') {
				teamName.push(el.trim())
			}
		})

		let res = teamName.map(el => el[0].toUpperCase()).sort().join('').toString()
		if (res.length > 0) { return res } else { return false }

	} else { return false }
}

module.exports = {
	createDreamTeam
};
