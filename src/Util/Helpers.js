/* eslint-disable no-unused-vars */
const ops = ['*', '/', '+', '-']
export default function Helpers() {
	const isCurrentNumDecimal = str => {
		let currentNum = ''
		for (let i = str.length - 1; i >= 0; i--) {
			if (!ops.includes(str[i])) currentNum += str[i]
			else break
		}
		if (currentNum.includes('.')) return true
		return false
	}
	return {
		isCurrentNumDecimal,
	}
}
