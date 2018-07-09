import PropTypes from "prop-types";
import { Text } from "react-native";
import { createStackNavigator } from "react-navigation";
import React from "react";
import Recipe from "../../components/Recipe";

const recipe = {
    image_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
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

class RecipeDetailsScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
    };
    static defaultProps = {
        navigation: {},
    };

    static navigationOptions = ({ navigation }) => {
        const { getParam } = navigation;
        return {
            headerTitle: <Text style={headerTitleStyle}>Recipe</Text>,
            titleStyle: { alignSelf: "center" },
            headerLeft: clickableIcon(
                "search",
                getParam("onSearchClick", () => {})
            ),
            headerRight: clickableIcon(
                Platform.OS === "ios" ? "add-circle-outline" : "add-circle",
                getParam("onAddClick", () => {})
            ),
        };
    };

    constructor(props) {
        super(props);
        this.state = {};
        props.navigation.setParams({
            onAddClick: this.onAddClick,
            onSearchClick: this.onSearchClick,
        });
    }

    render() {
        return <Recipe data={recipe} />;
    }
}

// export default RecipesScreen;

// Do this if you want a header bar on top
export default createStackNavigator({
    RecipeDetails: {
        screen: RecipeDetailsScreen,
    },
});
