import React from "react";
import { createStackNavigator } from "react-navigation";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import { View, FlatList, TouchableOpacity, Platform, Text } from "react-native";
import { ButtonGroup } from "react-native-elements";
import RecipeItem from "../../../components/RecipeItem";
import style from "./style";

const headerTitleStyle = {
    color: "rgba(0, 0, 0, .9)",
    fontWeight: Platform.OS === "ios" ? "700" : "500",
    fontSize: Platform.OS === "ios" ? 20 : 22,
    textAlign: "center",
    alignSelf: "center",
    width: "100%",
};

// Should be removed after integration
const list = [
    {
        name: "Burritos",
        avatar_url:
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/14/0/FNK_breakfast-burrito_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382542427230.jpeg",
        subtitle: "Vice President",
    },
    {
        name: "Quesadillas",
        avatar_url:
            "https://atmedia.imgix.net/0e56ab38542c762f226df9866314520e2fac6f6a?w=800&fit=max",
        subtitle: "Vice Chairman",
    },
    {
        name: "Nachos",
        avatar_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZv4BjDKz1dCN5M9O6Iqhc5uKcRP6aQhM3CVGQOxFnhCgJSYxA",
        subtitle: "Weennnnn",
    },
];

const buttons = ["Recently Added", "Favorites"];

const keyExtractor = (_, index) => index.toString();

const clickableIcon = (iconName, onClick) => (
    <TouchableOpacity onPress={onClick}>
        <Icon
            name={Platform.OS === "ios" ? `ios-${iconName}` : `md-${iconName}`}
            size={25}
            style={{ marginLeft: 16, marginRight: 16 }}
        />
    </TouchableOpacity>
);

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
            recipeList: list,
            selectedListIndex: 0,
        };
        props.navigation.setParams({
            onAddClick: this.onAddClick,
            onSearchClick: this.onSearchClick,
        });
    }

    onUpdatedListIndex = newListIndex => {
        this.setState({
            recipeList: list, // should be updated
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

    renderItem = ({ item }) => <RecipeItem data={item} />;

    render() {
        const { recipeList, selectedListIndex } = this.state;

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
                    data={recipeList}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

// export default RecipesScreen;

// Do this if you want a header bar on top
export default createStackNavigator({
    Recipe: {
        screen: RecipesScreen,
    },
});
