import React from "react";
import { Image, ScrollView, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import clickableIcon from "../../components/ClickableIcon";
// import groceryDefaultData from "./groceryDefault";
import groceryItemQuery from "./query";

import styles from "./style";

class GroceryDetailsScreen extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        navigation: PropTypes.object,
    };
    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text>{navigation.getParam("itemName", "Ingredient Name")}</Text>
        ),
        headerLeft: clickableIcon(
            "arrow-back",
            navigation.getParam("onBack", () => {})
        ),
    });
    // This will declare all the default properties passed in this class
    static defaultProps = {
        navigation: {},
    };

    constructor(props) {
        super(props);
        props.navigation.setParams({
            onBack: this.onBack,
        });
        this.state = {
            itemID: props.navigation.getParam("itemID", ""),
        };
    }

    onBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <Query query={groceryItemQuery}>
                {({ data, loading, error }) => {
                    if (loading) return <ActivityIndicator size="large" />;
                    if (error) return <Text>Error</Text>;
                    const ingredientData = data.groceryList.find(
                        item => item.id === this.state.itemID
                    );
                    return (
                        <ScrollView>
                            <Image
                                style={styles.image}
                                source={{
                                    uri: ingredientData.ingredientImage
                                        ? ingredientData.ingredientImage
                                        : "http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg",
                                }}
                            />
                            <Text h3>{ingredientData.ingredientName}</Text>
                            <Text style={styles.text}>
                                {`Amount needed: ${ingredientData.amount} ${
                                    ingredientData.measurement
                                }`}
                            </Text>
                            {ingredientData.addedBy.length !== 0 ? (
                                <Text style={styles.text}>
                                    {`Used in recipe${
                                        ingredientData.addedBy.length > 1
                                            ? "s"
                                            : ""
                                    }: ${ingredientData.addedBy
                                        .toString()
                                        .replace(/,/g, ", ")}`}
                                </Text>
                            ) : null}
                            {ingredientData.ingredientType.length !== 0 ? (
                                <Text style={styles.text}>
                                    {`Ingredient type${
                                        ingredientData.ingredientType.length > 1
                                            ? "s"
                                            : ""
                                    }: ${ingredientData.ingredientType
                                        .toString()
                                        .replace(/,/g, ", ")}`}
                                </Text>
                            ) : null}
                            {ingredientData.ingredientGroup.length !== 0 ? (
                                <Text style={styles.text}>
                                    {`Food Group${
                                        ingredientData.ingredientGroup.length >
                                        1
                                            ? "s"
                                            : ""
                                    }: ${ingredientData.ingredientGroup
                                        .toString()
                                        .replace(/,/g, ", ")}`}
                                </Text>
                            ) : null}
                        </ScrollView>
                    );
                }}
            </Query>
        );
    }
}

export default GroceryDetailsScreen;
