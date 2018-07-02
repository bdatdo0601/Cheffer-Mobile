import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import SearchForm from "../../components/FormInput/SearchForm";

import styles from "./style";

const cancelButton = onCancel => (
    <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
    </TouchableOpacity>
);

class SearchScreen extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        navigation: PropTypes.object,
    };
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <SearchForm onSearch={navigation.getParam("onSearch", () => {})} />
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
            onSearch: this.onSearch,
            onCancel: this.onCancel,
        });
    }

    onSearch = searchVal => {
        // Do search logic here
        console.log(searchVal);
    };

    onCancel = () => {
        this.props.navigation.goBack();
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Look at all these chicken</Text>
            </View>
        );
    }
}

export default SearchScreen;
