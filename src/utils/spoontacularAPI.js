import axios from "axios";

const SPOON_API =
    "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/visualizeIngredients";

const API_KEY = "ILZlWHtttrmshxqQO2fLKjIX7K6np1VVyXSjsniRfrNmX1XltF";

const getPictureFromAPI = (searchQuery = " ") => {
    const request = axios.post(
        SPOON_API,
        {
            defaultCss: true,
            instructions: searchQuery,
            showBacklink: false,
            view: "grid",
        },
        {
            headers: {
                "X-Mashape-Key": API_KEY,
                Accept: "text/html",
                "Content-Type": "application/x-www-form-urlencoded",
            },
        }
    );
    console.log(request);
    return request;
};

export default Object.freeze({
    getPictureFromAPI,
});
