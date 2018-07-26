import React from "react";
import { Image, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import PropTypes from "prop-types";
import clickableIcon from "../../components/ClickableIcon";
import groceryDefaultData from "./groceryDefault";

import styles from "./style";

class GroceryDetailsScreen extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        navigation: PropTypes.object,
        data: PropTypes.object,
    };
    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Text>{groceryDefaultData.ingredientName}</Text>,
        headerLeft: clickableIcon(
            "arrow-back",
            navigation.getParam("onBack", () => {})
        ),
    });
    // This will declare all the default properties passed in this class
    static defaultProps = {
        navigation: {},
        data: groceryDefaultData,
    };

    constructor(props) {
        super(props);
        props.navigation.setParams({
            onBack: this.onBack,
        });
    }

    onBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        const data = groceryDefaultData;
        console.log(this.props.data);
        return (
            <ScrollView>
                <Image
                    style={styles.image}
                    source={{
                        uri: data.image
                            ? data.image
                            : "http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg",
                    }}
                />
                <Text h3>{data.name}</Text>
                <Text style={styles.text}>
                    {`Amount needed: ${data.amount} ${data.measurement}`}
                </Text>
                {data.addedBy.length !== 0 ? (
                    <Text style={styles.text}>
                        {`Used in recipe${
                            data.addedBy.length > 1 ? "s" : ""
                        }: ${data.addedBy.toString().replace(/,/g, ", ")}`}
                    </Text>
                ) : null}
                {data.type.length !== 0 ? (
                    <Text style={styles.text}>
                        {`Ingredient type${
                            data.type.length > 1 ? "s" : ""
                        }: ${data.type.toString().replace(/,/g, ", ")}`}
                    </Text>
                ) : null}
                {data.group.length !== 0 ? (
                    <Text style={styles.text}>
                        {`Food Group${
                            data.group.length > 1 ? "s" : ""
                        }: ${data.group.toString().replace(/,/g, ", ")}`}
                    </Text>
                ) : null}
            </ScrollView>
        );
    }
}

export default GroceryDetailsScreen;
