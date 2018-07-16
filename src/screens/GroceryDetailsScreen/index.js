import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./style";

const clickableIcon = (iconName, onClick) => (
    <TouchableOpacity onPress={onClick}>
        <Icon
            name={Platform.OS === "ios" ? `ios-${iconName}` : `md-${iconName}`}
            size={25}
            style={{ marginLeft: 18, marginRight: 16 }}
        />
    </TouchableOpacity>
);

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
