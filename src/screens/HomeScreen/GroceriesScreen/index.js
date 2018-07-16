import React from "react";
import PropTypes from "prop-types";
import { View, FlatList, Text, Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import GroceryItem from "../../../components/GroceryItem";
import style from "./style";

const headerTitleStyle = {
    color: "rgba(0, 0, 0, .9)",
    fontWeight: Platform.OS === "ios" ? "700" : "500",
    fontSize: Platform.OS === "ios" ? 20 : 22,
    textAlign: "center",
    alignSelf: "center",
    width: "100%",
};

const mockData = [
    {
        ingredientName: "Chicken",
        ingredientImage:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        measurement: "lbs",
        amount: 100,
        isChecked: false,
        addedBy: ["Recipe1", "Recipe2"],
        ingredientType: ["Poultry", "test", "Meat"],
        ingredientGroup: ["Meat", "Protein"],
    },
    {
        ingredientName: "Meatloaf",
        ingredientImage:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        measurement: "lbs",
        amount: 100,
        isChecked: false,
        addedBy: ["Recipe1", "Recipe2"],
        ingredientType: ["Poultry", "test", "Meat"],
        ingredientGroup: ["Meat", "Protein"],
    },
    {
        ingredientName: "Meatloafs",
        ingredientImage:
            "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
        measurement: "lbs",
        amount: 100,
        isChecked: false,
        addedBy: ["Recipe1", "Recipe2"],
        ingredientType: ["Poultry", "test", "Meat"],
        ingredientGroup: ["Meat", "Protein"],
    },
];

class GroceriesScreen extends React.Component {
    keyExtractor = (_, index) => index.toString();

    static navigationOptions = () =>
        // const { getParam } = navigation;
        ({
            headerTitle: <Text style={headerTitleStyle}>Grocery</Text>,
            titleStyle: { alignSelf: "center" },
        });

    static propTypes = {
        navigation: PropTypes.object,
    };

    static defaultProps = {
        navigation: {},
    };

    constructor(props) {
        super(props);
        this.state = {
            groceryList: mockData,
        };
    }

    toggleCheckBox = (item, itemIndex) => {
        // UPDATE STATUS HERE
        const updatedGroceryList = this.state.groceryList;
        const updatedItem = { ...item, isChecked: !item.isChecked };
        updatedGroceryList[itemIndex] = updatedItem;
        this.setState({ groceryList: updatedGroceryList });
    };

    onItemClick = item => {
        this.props.navigation.navigate("GroceryDetails", { item });
    };

    renderItem = ({ item, index }) => (
        <GroceryItem
            data={item}
            onCheckItem={() => this.toggleCheckBox(item, index)}
            onItemClick={() => this.onItemClick(item)}
        />
    );

    render() {
        return (
            <View style={style.viewStyle}>
                <FlatList
                    style={style.flatListStyle}
                    keyExtractor={this.keyExtractor}
                    data={this.state.groceryList}
                    renderItem={this.renderItem}
                    extraData={this.state}
                />
            </View>
        );
    }
}

// Do this if you want a header bar on top
export default createStackNavigator({
    Grocery: {
        screen: GroceriesScreen,
    },
});
