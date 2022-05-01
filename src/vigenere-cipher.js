const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(isNotReverse = true) {
		this.type = isNotReverse;
		this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	}

	encrypt(...arrOfarguments) {
		if (arrOfarguments.length !== 2 || typeof arrOfarguments[0] !== 'string' || typeof arrOfarguments[1] !== 'string') throw new Error('Incorrect arguments!');
		let repeatCount = Math.ceil(arrOfarguments[0].length / arrOfarguments[1].length)
		let upperText = arguments[0].toUpperCase()
		let key = arrOfarguments[1].repeat(repeatCount).toUpperCase()
		let res = []
		let j = 0


		for (let i = 0; i < arrOfarguments[0].length; i++) {
			if (this.alphabet.includes(upperText[i])) {
				let newAlphabet = this.alphabet.slice(this.alphabet.indexOf(key[j])) + this.alphabet;
				res.push(newAlphabet[this.alphabet.indexOf(upperText[i])])
				j++;
			} else (
				res.push(upperText[i])
			)
		}
		return this.type ? res.join('') : res.reverse().join('');
	}
	decrypt(...arrOfarguments) {
		if (arrOfarguments.length !== 2 || typeof arrOfarguments[0] !== 'string' || typeof arrOfarguments[1] !== 'string') throw new Error('Incorrect arguments!');
		let repeatCount = Math.ceil(arrOfarguments[0].length / arrOfarguments[1].length)
		let upperText = arrOfarguments[0].toUpperCase()
		let key = arrOfarguments[1].repeat(repeatCount).toUpperCase()
		let res = []
		let j = 0
		for (let i = 0; i < arrOfarguments[0].length; i++) {
			if (this.alphabet.includes(upperText[i])) {
				let newAlphabet = this.alphabet.slice(this.alphabet.indexOf(key[j])) + this.alphabet;
				res.push(this.alphabet[newAlphabet.indexOf(upperText[i])])
				j++;
			} else {
				//	console.log(i);
				res.push(upperText[i])
			}
		}
		return this.type ? res.join('') : res.reverse().join('');
	}
}

module.exports = {
	VigenereCipheringMachine
};
