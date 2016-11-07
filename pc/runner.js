'use strict';

const co = require('co');

module.exports = function runner(generator) {
	co(generator).catch(onerror);
};

function onerror(err) {
	console.error(err);
}
