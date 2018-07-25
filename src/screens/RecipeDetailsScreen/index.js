import PropTypes from "prop-types";
import { Text } from "react-native";
import React from "react";
import Recipe from "../../components/Recipe";
import clickableIcon from "../../components/ClickableIcon";

class RecipeDetailsScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
    };
    static defaultProps = {
        navigation: {},
    };

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Text>RecipeMeeee</Text>,
        headerLeft: clickableIcon(
            "arrow-back",
            navigation.getParam("onBack", () => {
                console.warn("nadlwhblfh");
            })
        ),
    });

    onBack = () => {
        this.props.navigation.goBack();
    };

    constructor(props) {
        super(props);
        this.state = {
            data: props.navigation.getParam("currentRecipeId", "defaultRecipe"),
        };
        props.navigation.setParams({
            onBack: this.onBack,
        });
    }

    render() {
        return <Recipe data={{ data: this.state.data }} />;
    }
}

// export default RecipesScreen;

// Do this if you want a header bar on top
export default RecipeDetailsScreen;
