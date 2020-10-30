/* eslint-disable no-unused-vars */
const ops = ['*', '/', '+', '-']
export default function Helpers() {
	const isCurrentNumDecimal = str => {
		let currentNum = ''
		for (let i = str.length - 1; i >= 0; i--) {
			if (str[i] === '.') return true
			else if (isNaN(str[i])) return false
		}
		return false
	}
	return {
		isCurrentNumDecimal,
	}
}
