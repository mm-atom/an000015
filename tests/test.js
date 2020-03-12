const test = require('ava');

const { default: a } = require('../dist/index');

test('编码', async (t) => {
	const ret = await a('foo', 3, 8);
	t.is(ret.length, 3);
	t.is(ret[0].length, 11);	// foo + 8位数字
	t.deepEqual(ret.map((code) => {
		return code.substr(0, 3);
	}), ['foo', 'foo', 'foo']);
});
