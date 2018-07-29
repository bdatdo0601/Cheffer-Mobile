import React from "react";
import PropTypes from "prop-types";
import {
    ActivityIndicator,
    View,
    FlatList,
    Text,
    Platform,
} from "react-native";
import { createStackNavigator } from "react-navigation";
import { Query } from "react-apollo";
import groceryQuery from "./query";
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
        this.state = {};
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

    onItemRemove = item => {
        this.setState({
            groceryList: this.state.groceryList.filter(
                data => item.ingredientName !== data.ingredientName
            ),
        });
    };

    renderItem = ({ item, index }) => (
        <GroceryItem
            data={item}
            onCheckItem={() => this.toggleCheckBox(item, index)}
            onItemClick={() => this.onItemClick(item)}
            onItemRemove={() => this.onItemRemove(item)}
        />
    );

    render() {
        return (
            <Query query={groceryQuery}>
                {({ data, loading, error }) => {
                    if (loading) return <ActivityIndicator size="large" />;
                    if (error) return <Text>Error</Text>;
                    return (
                        <View style={style.viewStyle}>
                            <FlatList
                                style={style.flatListStyle}
                                keyExtractor={this.keyExtractor}
                                data={data.groceryList}
                                renderItem={this.renderItem}
                                extraData={this.state}
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
    Grocery: {
        screen: GroceriesScreen,
    },
});
