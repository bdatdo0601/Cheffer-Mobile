import PropTypes from "prop-types";
import { createStackNavigator } from "react-navigation";
import React from "react";
import Recipe from "../../components/Recipe";

class RecipeDetailsScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
    };
    static defaultProps = {
        navigation: {},
    };

    static navigationOptions = () => {};

    constructor(props) {
        super(props);
        this.state = {
            data: props.navigation.getParam("currentRecipeId", "defaultRecipe"),
        };
    }

    render() {
        return <Recipe data={{ data: this.state.data }} />;
    }
}

// export default RecipesScreen;

// Do this if you want a header bar on top
export default createStackNavigator({
    RecipeDetails: {
        screen: RecipeDetailsScreen,
    },
});
