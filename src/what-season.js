const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {

	if (arguments.length === 0) return "Unable to determine the time of year!";
	if (Object.prototype.toString.call(date) !== '[object Date]' || Object.getOwnPropertySymbols(date).length !== 0) throw new Error('Invalid date!');

	let month = date.toLocaleDateString('en', {
		month: 'short'
	})

	switch (true) {
		case ["Dec", "Jan", "Feb"].includes(month): return "winter";
		case ["Mar", "Apr", "May"].includes(month): return "spring";
		case ["Jun", "Jul", "Aug"].includes(month): return "summer";
		case ["Sep", "Oct", "Nov"].includes(month): return "fall";

	}
}

module.exports = {
	getSeason
};
