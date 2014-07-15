var through = require('through2');

module.exports = str;

function str(data) {
	var input = through();
	input.write(data);
	input.end();
	return input;
}