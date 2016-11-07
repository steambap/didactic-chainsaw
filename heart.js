'use strict';

const robot = require('robotjs');

const screensize = robot.getScreenSize();
const height = (screensize.height / 2) - 10;
const width = screensize.width;
const {PI, sin, cos, pow} = Math;

for (let t = 0; t < 360; t++) {
	let theta = PI * t / 180;
	let x = 16 * pow(sin(theta), 3);
	let y = 13 * cos(theta) -
		5 * cos(2 * theta) -
		2 * cos(3 * theta) -
		cos(4 * theta);

	robot.moveMouse(-x * 20 + width / 2, -y * 20 + height);
	robot.mouseClick();
}
