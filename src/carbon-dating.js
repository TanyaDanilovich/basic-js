const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
	if (arguments.length === 0) {
		console.log('arguments.length === 0');
		return false
	}
	if (Number.isNaN(sampleActivity)) {
		console.log('Number.isNaN(sampleActivity)');
		return false;
	}
	if (typeof (sampleActivity) != 'string') {
		console.log("typeof (sampleActivity) === 'string'");
		return false
	}
	if (sampleActivity.length === 0) {
		console.log('sampleActivity.length === 0');
		return false;
	}
	if (!Number(sampleActivity)) {
		console.log(!Number(sampleActivity));
		return false;
	}
	if (Number(sampleActivity) < 1 || Number(sampleActivity) > 15) {
		console.log('0-15');
		return false;
	}

	console.log(Number(sampleActivity));

	let age = ((Math.log(MODERN_ACTIVITY / Number(sampleActivity))) / (0.693 / 5730))
	console.log(MODERN_ACTIVITY / Number(sampleActivity));
	console.log('log', (Math.log(MODERN_ACTIVITY / Number(sampleActivity))))
	console.log(0.693 / 5730);
	return Math.ceil(age);
	//return age
}

module.exports = {
	dateSample
};
