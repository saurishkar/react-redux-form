import _ from 'lodash';

const FETCH_POST = 'FETCH_POST';

export default function Posts(state = {}, action) {
	// console.log(FETCH_POST);
	switch(action.type) {
	case FETCH_POST: return _.mapKeys(action.payload, 'id');

	default: return state;
	}
}