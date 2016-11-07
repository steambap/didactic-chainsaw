'use strict';
/**
 * basic record test for search 12306 on baidu
 */

const robot = require('robotjs');
const {click, input, wait, assert} = require('./util.js');
const runner = require('./');

runner(function *() {
	// tap on record
	click(665, 60);
	// type in some address
	input(250, 60, 'baidu.com');
	// wait to loading
	yield wait(1999);
	// search for infamous 12306
	input(435, 335, '12306');

	yield wait(999);
	// click on search result
	click(300, 225);

	yield wait(2299);
	assert(760, 345, 815, 345);
});
