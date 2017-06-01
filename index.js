module.exports = format

const equal = require('equal')
const symbols = {
	success: String.fromCharCode(0x2714),
	failure: String.fromCharCode(0x2716)
}

function format(test) {
	var symbol = equal(test.result, test.expected) ? symbols.success : symbols.failure
	var result = symbol + ' ' + test.name
	return result
}
