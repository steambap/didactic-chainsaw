'use strict';
const repoTable = {
	'png-to-ico': 2754,
	'steambap.github.io': 8188,
	'kowloonia-parser': 45281,
	'weilinshi.org': 1229,
	'learn-rust': 315,
	'shiweilin.cn': 618,
	'sublemon': 4145,
	'query-element': 1679,
	'lc2-tutorial': 2974,
	'lemon-cloud': 2997,
	'electron-pref': 2305,
	'probe-client': 8939,
	'probe-simple-report': 7419,
	'svg-captcha': 2767,
	'cloud-core': 6044,
	'lemoncase2': 16673 + 4122,
	'cloud-extension-public': 132,
	'cloud-extension-task': 510,
	'lemon-public': 2019,
	'warring-states': 6099,
	'lc2-compiler': 5404
};

let total = 0;
Object.keys(repoTable).forEach(repoName => {
	total += repoTable[repoName];
});

console.log(total);
