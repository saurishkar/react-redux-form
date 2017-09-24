const FETCH_POST = "FETCH_POST";
const STORE_POST = "STORE_POST";
const FETCH_SINGLE = "FETCH_SINGLE";

export const ROOT_URL = "https://reduxblog.herokuapp.com/api";
export const API_KEY = "?key=roronoazoro1233";

export function FetchPosts() {
    
    const url = `${ROOT_URL}/posts/${API_KEY}`;
    const request = $.ajax({
        url: url
    });
    return {
        type: FETCH_POST,
        payload: request
    };
}

export function StorePosts(data, callback) {
    const request = $.ajax({
        url: `${ROOT_URL}/posts${API_KEY}`,
        type: "POST",
        data: data
    })
        .then(() => callback());
	
    return {
        type: STORE_POST,
        payload: request
    };
}

export function FetchSinglePost(id) {
    const url = `${ROOT_URL}/posts/${id}${API_KEY}`;    
    const request = $.ajax({
        url: url
    });

    return {
        type: FETCH_SINGLE,
        payload: request
    };
}