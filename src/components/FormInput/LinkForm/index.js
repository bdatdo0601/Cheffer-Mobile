import React from "react";
import PropTypes from "prop-types";
import { Platform } from "react-native";
import { SearchBar } from "react-native-elements";

import styles from "./style";

class LinkForm extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        onSubmit: PropTypes.func,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        onSubmit: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            linkInput: "",
        };
    }

    render() {
        const { onSubmit } = this.props;
        const { linkInput } = this.state;

        return (
            <SearchBar
                placeholder="Link to recipe"
                round
                keyboardType={Platform.OS === "ios" ? "web-search" : "default"}
                onChangeText={value => {
                    this.setState({ linkInput: value });
                }}
                onSubmitEditing={() => onSubmit(linkInput)}
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.input}
            />
        );
    }
}

export default LinkForm;
