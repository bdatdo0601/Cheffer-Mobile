import axios from "axios";

const EDAMAM_API = "https://api.edamam.com/search";

const API_KEY = "4f089ca4445b32f374c00c4b8c736ad1";
const API_ID = "e5ec0ec3";

const getRecipesFromAPI = (fromIndex = 0, toIndex = 100, searchQuery = " ") => {
    const request = axios.get(EDAMAM_API, {
        params: {
            q: searchQuery,
            from: fromIndex,
            to: toIndex,
            app_id: API_ID,
            app_key: API_KEY,
        },
    });
    return request;
};

export default Object.freeze({
    getRecipesFromAPI,
});
