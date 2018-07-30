import axios from "axios";

const PIXABAY_API = "https://pixabay.com/api/";

const API_KEY = "9684143-1d86c3887cf3ae155ae3be8b8";

const getPictureFromAPI = (searchQuery = " ") => {
    const request = axios.get(PIXABAY_API, {
        params: {
            q: searchQuery,
            key: API_KEY,
        },
    });
    return request;
};

export default Object.freeze({
    getPictureFromAPI,
});
