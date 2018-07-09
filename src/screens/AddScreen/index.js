import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import LinkForm from "../../components/FormInput/LinkForm";

import styles from "./style";

const cancelButton = onCancel => (
    <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
    </TouchableOpacity>
);

class AddScreen extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        navigation: PropTypes.object,
    };
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <LinkForm onSubmit={navigation.getParam("onSubmit", () => {})} />
        ),
        headerRight: cancelButton(navigation.getParam("onCancel", () => {})),
    });
    // This will declare all the default properties passed in this class
    static defaultProps = {
        navigation: {},
    };

    constructor(props) {
        super(props);
        props.navigation.setParams({
            onSubmit: this.onSubmit,
            onCancel: this.onCancel,
        });
    }

    onSubmit = value => {
        // Do add request here
        console.log(value);
    };

    onCancel = () => {
        this.props.navigation.goBack();
    };

    render() {
        return <View style={styles.container} />;
    }
}

export default AddScreen;
