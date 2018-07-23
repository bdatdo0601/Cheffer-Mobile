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
        ingredientName: "Chicken Breast",
        ingredientImage:
            "https://www.howtoshopforfree.net/wp-content/uploads/2015/05/fresh-chicken-breast.png",
        measurement: "lbs",
        amount: 1.5,
        isChecked: false,
        addedBy: ["Fajitas", "Chicken Kievs"],
        ingredientType: ["Poultry", "Meat"],
        ingredientGroup: ["Meat", "Protein"],
    },
    {
        ingredientName: "Granulated Sugar",
        ingredientImage:
            "https://images-na.ssl-images-amazon.com/images/I/41JqqEsqYIL._SX355_.jpg",
        measurement: "cups",
        amount: 3,
        isChecked: false,
        addedBy: ["Sugar Cookies"],
        ingredientType: ["Baking Ingredients"],
        ingredientGroup: ["Sugar"],
    },
    {
        ingredientName: "Unbleached Flour",
        ingredientImage:
            "https://target.scene7.com/is/image/Target/13474786?wid=488&hei=488&fmt=pjpeg",
        measurement: "lbs",
        amount: 2,
        isChecked: false,
        addedBy: ["Sugar Cookies"],
        ingredientType: ["Baking Ingredients"],
        ingredientGroup: [],
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
