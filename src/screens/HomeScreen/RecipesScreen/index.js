import React from "react";
import { createStackNavigator } from "react-navigation";
import PropTypes from "prop-types";
import {
    ActivityIndicator,
    View,
    FlatList,
    Platform,
    Text,
} from "react-native";
import { ButtonGroup } from "react-native-elements";
import { Query } from "react-apollo";
import RecipeItem from "../../../components/RecipeItem";
import style from "./style";
import clickableIcon from "../../../components/ClickableIcon";
import recipeQuery from "./query";

const headerTitleStyle = {
    color: "rgba(0, 0, 0, .9)",
    fontWeight: Platform.OS === "ios" ? "700" : "500",
    fontSize: Platform.OS === "ios" ? 20 : 22,
    textAlign: "center",
    alignSelf: "center",
    width: "100%",
};

const buttons = ["Recently Added", "Favorites"];

const keyExtractor = (_, index) => index.toString();

class RecipesScreen extends React.Component {
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
        this.state = {
            selectedListIndex: 0,
        };
        props.navigation.setParams({
            onAddClick: this.onAddClick,
            onSearchClick: this.onSearchClick,
        });
    }

    onUpdatedListIndex = newListIndex => {
        this.setState({
            selectedListIndex: newListIndex,
        });
    };

    onSearchClick = () => {
        const { navigation } = this.props;
        navigation.navigate("Search");
    };

    onAddClick = () => {
        const { navigation } = this.props;
        navigation.navigate("Add");
    };

    onRecipePress = recipe => {
        const { navigation } = this.props;
        // console.warn(currentRecipeId);
        navigation.navigate("RecipeDetails", {
            currentRecipeId: recipe.recipeID,
            currentRecipeName: recipe.name,
        });
    };

    renderItem = ({ item }) => (
        <RecipeItem data={item} onRecipePress={this.onRecipePress} />
    );

    render() {
        const { selectedListIndex } = this.state;

        return (
            <Query query={recipeQuery}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return <ActivityIndicator size="large" />;
                    }
                    if (error) {
                        console.log(error);
                        return <Text>Query Error</Text>;
                    }
                    return (
                        <View style={style.viewStyle}>
                            <ButtonGroup
                                onPress={this.onUpdatedListIndex}
                                selectedIndex={selectedListIndex}
                                buttons={buttons}
                                containerStyle={style.buttonGroupStyle}
                            />
                            <FlatList
                                style={style.flatListStyle}
                                keyExtractor={keyExtractor}
                                data={data.getRecipes}
                                renderItem={this.renderItem}
                            />
                        </View>
                    );
                }}
            </Query>
        );
    }
}

// Do this if you want a header bar on top
export default createStackNavigator({
    Recipe: {
        screen: RecipesScreen,
    },
});
