import React from "react";
import Recipe from "../../components/Recipe";
import { View } from "react-native";
import style from "./style";

const recipe = {
    name: "bread rolls",
    ingredients: [
        {
            ingredient: "schmeckles",
            amount: 5,
            measurement: "silver",
        },
        {
            ingredient: "come",
            amount: 2,
            measurement: "oz.",
        },
    ],
    steps: [
        "put your left foot in",
        "take your left foot out",
        "in",
        "out",
        "in",
        "out",
        "shake it all about",
    ],
    associatedRecipes: ["fa6i", "gfa76a"],
    comments: [
        {
            id: "fnsyoe",
            userId: "nduie",
            comment: "This wasn't bad",
            reply: [
                {
                    id: "26tr29g",
                    userId: "2f3vf",
                    comment: "I agree",
                    reply: [],
                    likes: -10,
                    time: "some date format",
                },
                {
                    id: "2ot2o",
                    userId: "fba697e",
                    comment: "Really? I thought it was terrible",
                    reply: [],
                    likes: 32,
                    time: "some date format",
                },
            ],
            likes: 256,
            time: "some date format",
        },
    ],
};

class RecipesScreen extends React.Component {
    keyExtractor = (_, index) => index.toString();

    renderItem = ({ recipe }) => <Recipe data={recipe} />;

    render() {
        return <View style={style.viewStyle}>data={recipe}</View>;
    }
}

export default RecipesScreen;
