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
                            : "https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/29790022_2230846830260625_4694607993546152941_n.jpg?_nc_cat=0&oh=479acdbe2a163ca4850d72b269307b90&oe=5BD961B5",
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
