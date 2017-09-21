import FETCH_POST from '../actions/fetch_posts';

export default function Post(state = {}, action) {
	const posts = null;
	switch(action.type) {
		case FETCH_POST: return action.payload.data.map((elem) => {
			return {...posts, elem.id => elem}};
		});

		default: return state;
	};
}