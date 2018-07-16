import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import clickableIcon from "../../components/Icon";

import styles from "./style";

class GroceryDetailsScreen extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        navigation: PropTypes.object,
    };
    static navigationOptions = ({ navigation }) => ({
        headerTitle: <Text>GroceryItem</Text>,
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
    }

    onBack = () => {
        this.props.navigation.goBack();
    };

    render() {
        return <View style={styles.container} />;
    }
}

export default GroceryDetailsScreen;
