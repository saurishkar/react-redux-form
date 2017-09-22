const STORE_POST = "STORE_POST";

export default function StorePost(data) {
    return {
        type: STORE_POST,
        payload: data
    };
}