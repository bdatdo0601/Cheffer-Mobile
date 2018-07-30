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
import { Query, Mutation } from "react-apollo";
import {
    GROCERY_QUERY,
    TOGGLE_GROCERY_MUTATION,
    REMOVE_GROCERY_MUTATION,
} from "./query";
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

    onItemClick = item => {
        this.props.navigation.navigate("GroceryDetails", { item });
    };

    updateRemoveItem = cache => {
        console.log(cache);
    };

    renderItem = ({ item }, onItemRemove, toggleCheckBox) => (
        <GroceryItem
            data={item}
            onCheckItem={() => {
                toggleCheckBox({
                    variables: {
                        groceryID: item.id,
                    },
                });
            }}
            onItemClick={() => this.onItemClick(item)}
            onItemRemove={() => {
                onItemRemove({
                    variables: {
                        groceryID: item.id,
                    },
                });
            }}
        />
    );

    renderScreen = (
        loading,
        error,
        groceryData,
        toggleGrocery,
        removeGrocery
    ) => {
        if (loading) {
            return <ActivityIndicator size="large" />;
        }
        if (error) return <Text>Error</Text>;
        return (
            <View style={style.viewStyle}>
                <FlatList
                    style={style.flatListStyle}
                    keyExtractor={this.keyExtractor}
                    data={groceryData.groceryList}
                    renderItem={item =>
                        this.renderItem(item, removeGrocery, toggleGrocery)
                    }
                    extraData={this.state}
                />
            </View>
        );
    };

    render() {
        return (
            <Query query={GROCERY_QUERY}>
                {({ data, loading, error }) => (
                    <Mutation mutation={TOGGLE_GROCERY_MUTATION}>
                        {toggleGrocery => (
                            <Mutation mutation={REMOVE_GROCERY_MUTATION}>
                                {removeGrocery =>
                                    this.renderScreen(
                                        loading,
                                        error,
                                        data,
                                        toggleGrocery,
                                        removeGrocery
                                    )
                                }
                            </Mutation>
                        )}
                    </Mutation>
                )}
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
