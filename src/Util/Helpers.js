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

	function addCommas(nStr) {
		nStr += ''
		var x = nStr.split('.')
		var x1 = x[0]
		var x2 = x.length > 1 ? '.' + x[1] : ''
		var rgx = /(\d+)(\d{3})/
		while (rgx.test(x1)) {
			x1 = x1.replace(rgx, `$1,$2`)
		}
		return x1 + x2
	}
	return {
		isCurrentNumDecimal,
		addCommas,
	}
}
