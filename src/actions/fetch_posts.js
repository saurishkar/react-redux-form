const FETCH_POST = 'FETCH_POST';
const ROOT_URL = 'https://reduxblog.herokuapp.com/api';

export default function FetchPosts() {
	const API_KEY = '?key=roronoazoro1233';
	const url = `${ROOT_URL}/posts/${API_KEY}`;
	const request = $.ajax({
		url: url
	});
	return {
		type: FETCH_POST,
		payload: request
	};
}