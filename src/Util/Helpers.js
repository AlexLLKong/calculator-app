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

	function addCommas(str) {
		str += ''
		var x = str.split('.')
		var x1 = x[0]
		var x2 = x.length > 1 ? '.' + x[1] : ''
		var rgx = /(\d+)(\d{3})/
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, `$1,$2`)
		}
		return x1 + x2
	}

	function removeCommas(str) {
		let ret = str.replace(/,/g, '')
		return ret
	}

	function moreOpenBracketsThanClosed(str) {
		console.log(str)
		let balance = 0
		for (let i = 0; i < str.length; i++) {
			if (str[i].includes('(')) balance++
			else if (str[i] === ')') balance--
		}
		if (balance > 0) return true
		return false
	}
	return {
		isCurrentNumDecimal,
		addCommas,
		removeCommas,
		moreOpenBracketsThanClosed,
	}
}
