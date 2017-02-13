'use strict';
const repoTable = {
	'png-to-ico': 2754,
	'kowloonia-parser': 45281 - 41810,
	'sublemon': 4403,
	'query-element': 1679,
	'lc2-tutorial': 4123,
	'lemon-cloud': 2997,
	'electron-pref': 2305,
	'probe-client': 9662,
	'probe-simple-report': 8258,
	'svg-captcha': 3318,
	'cloud-core': 6044,
	'lemoncase2': 16673 + 4122,
	'warring-states': 8067,
	'lc2-compiler': 7715,
	'lemonce-editor': 13649,
	'later-han': 182
};

let total = 0;
Object.keys(repoTable).forEach(repoName => {
	total += repoTable[repoName];
});

console.log(total);
