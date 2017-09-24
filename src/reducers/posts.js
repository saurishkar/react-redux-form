import _ from "lodash";

const FETCH_POST = "FETCH_POST";
const STORE_POST = "STORE_POST";
const FETCH_SINGLE = "FETCH_SINGLE";
const NOT_FOUND = "NOT_FOUND";

export default function Posts(state = {}, action) {
    
    switch(action.type) {
    case FETCH_POST: console.log("action: "+ action.type, action.payload);
        return _.mapKeys(action.payload, "id");

    case STORE_POST: console.log("action: "+ action.type, action.payload);
        return action.payload;

    case FETCH_SINGLE: console.log("action: "+ action.type, action.payload);
    	return action.payload;

  	case NOT_FOUND: console.log("action: "+ action.type, action.payload);
  		return action.payload;
    default: return state;
    }
}