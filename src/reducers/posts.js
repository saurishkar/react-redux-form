import _ from "lodash";

const FETCH_POST = "FETCH_POST";
const STORE_POST = "STORE_POST";

export default function Posts(state = {}, action) {
    
    switch(action.type) {
    case FETCH_POST: console.log("action: "+ action.type, action.payload);
        return _.mapKeys(action.payload, "id");

    case STORE_POST: console.log("action: "+ action.type, action.payload);
        return action.payload;

    default: return state;
    }
}