import React from "react";
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

    render() {
        const { onSearch } = this.props;

        return (
            <SearchBar
                placeholder="Search"
                round
                onChangeText={onSearch}
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                searchIcon={{ size: 20 }}
                inputStyle={styles.input}
            />
        );
    }
}

export default SearchForm;
