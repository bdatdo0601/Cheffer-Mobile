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
import RecipeItem from "../../../components/RecipeItem";
import style from "./style";
import edamamAPI from "../../../utils/edamamAPI";
import clickableIcon from "../../../components/ClickableIcon";

const headerTitleStyle = {
    color: "rgba(0, 0, 0, .9)",
    fontWeight: Platform.OS === "ios" ? "700" : "500",
    fontSize: Platform.OS === "ios" ? 20 : 22,
    textAlign: "center",
    alignSelf: "center",
    width: "100%",
};

const recipeKeywordList = [
    "Chicken",
    "Beef",
    "Salad",
    "Pork",
    "Vegan",
    "Cake",
    "Rabbit",
    "Lamb",
    "Potato",
];

const keyExtractor = (_, index) => index.toString();

class BrowseScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
    };
    static defaultProps = {
        navigation: {},
    };

    static navigationOptions = ({ navigation }) => {
        const { getParam } = navigation;
        return {
            headerTitle: <Text style={headerTitleStyle}>Browse</Text>,
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
            recipeList: [],
            loading: false,
        };
        props.navigation.setParams({
            onAddClick: this.onAddClick,
            onSearchClick: this.onSearchClick,
        });
    }

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
        navigation.navigate("RecipeDetails", {
            currentRecipeId: recipe.recipeID,
            currentRecipeName: recipe.name,
            externalRecipe: recipe,
            externalData: true,
        });
    };

    onFetchRecipe = () => {
        this.setState({ loading: true });
        edamamAPI
            .getRecipesFromAPI(
                0,
                100,
                recipeKeywordList[
                    Math.floor(Math.random() * recipeKeywordList.length)
                ]
            )
            .then(res => {
                const recipeData = res.data.hits.map(item => ({
                    ...item,
                    id: item.recipe.uri,
                    name: item.recipe.label,
                    headerImage: item.recipe.image,
                    prepTime: item.recipe.totalTime,
                    ingredients: item.recipe.ingredients,
                    link: item.recipe.url,
                    comments: [],
                }));
                this.setState({ recipeList: recipeData, loading: false });
            })
            .catch(err => {
                console.log(err);
            });
    };

    componentDidMount() {
        this.onFetchRecipe();
    }

    renderItem = ({ item }) => (
        <RecipeItem data={item} onRecipePress={this.onRecipePress} />
    );

    render() {
        const { recipeList } = this.state;
        if (recipeList.length === 0 || this.state.loading) {
            return <ActivityIndicator size="large" color="#0000ff" />;
        }
        return (
            <View style={style.viewStyle}>
                <FlatList
                    refreshing={this.state.loading}
                    onRefresh={() => this.onFetchRecipe()}
                    style={style.flatListStyle}
                    keyExtractor={keyExtractor}
                    data={recipeList}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

// Do this if you want a header bar on top
export default createStackNavigator({
    Browse: {
        screen: BrowseScreen,
    },
});
