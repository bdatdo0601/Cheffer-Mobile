import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import { SearchBar } from "react-native-elements";

import styles from "./style";

class SearchForm extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        onSearch: PropTypes.func,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        onSearch: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            searching: "",
        };
    }

    render() {
        const { onSearch } = this.props;

        return (
            <SearchBar
                placeholder="Search meeee"
                round
                onChangeText={searching => this.setState({ searching })}
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                searchIcon={{ size: 20 }}
                inputStyle={styles.input}
            />
        );
    }
}

export default SearchForm;
