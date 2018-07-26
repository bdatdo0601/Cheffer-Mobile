import PropTypes from "prop-types";
import { ActivityIndicator, Text } from "react-native";
import React from "react";
import { Query } from "react-apollo";
import Recipe from "../../components/Recipe";
import clickableIcon from "../../components/ClickableIcon";
import recipeDetailQuery from "./query";

class RecipeDetailsScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
    };
    static defaultProps = {
        navigation: {},
    };

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text>
                {navigation.getParam("currentRecipeName", "Recipe Name")}
            </Text>
        ),
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
            isNotQuery: props.navigation.getParam("isNotQuery", false),
        };
        console.log(this.state.data);
        props.navigation.setParams({
            onBack: this.onBack,
        });
    }

    render() {
        if (this.state.isNotQuery) return <Recipe data={this.state.data} />;
        return (
            <Query
                query={recipeDetailQuery}
                variables={{ recipeIDInput: { recipeID: this.state.data } }}
            >
                {({ loading, error, data }) => {
                    if (loading) {
                        return <ActivityIndicator size="large" />;
                    }
                    if (error) {
                        return <Text>Query Error</Text>;
                    }
                    return <Recipe data={data.getRecipeByID} />;
                }}
            </Query>
        );
    }
}

// export default RecipesScreen;

// Do this if you want a header bar on top
export default RecipeDetailsScreen;
