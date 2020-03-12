import fetch from 'node-fetch';
import config from '@mmstudio/config';

/**
 * 编码服务
 */
export default async function doc_code(name: string, num: number, len: number) {
	const msg = {
		len,
		name,
		num
	};
	const url = config.doccode;
	const res = await fetch(url, {
		method: 'POST',
		body: JSON.stringify(msg),
		headers: {
			'Content-Type': 'text/json; charset=utf-8'
		}
	});
	if (res.status > 0 && res.status < 400) {
		return await res.json() as string[];
	}
	throw new Error(res.statusText);
}
