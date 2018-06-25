import React from "react";
import { View, Text, Platform } from "react-native";
import PropTypes from "prop-types";
import SearchForm from "../../components/FormInput/SearchForm";

import styles from "./style";

const searchBar =
    Platform.OS === "ios"
        ? {
              title: <SearchForm />,
              headerTitleStyle: {
                  width: "100%",
                  height: "100%",
              },
          }
        : {
              header: <SearchForm />,
              headerStyle: {
                  width: "100%",
                  height: "100%",
              },
          };

class SearchScreen extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        navigation: PropTypes.object,
    };
    static navigationOptions = {
        ...searchBar,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        navigation: {},
    };

    constructor(props) {
        super(props);
        this.state = { usernameError: "", passwordError: "" };
    }

    onSearch = () => {
        // Do search logic here
        console.log("search");
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Look at all these chicken</Text>
            </View>
        );
    }
}

export default SearchScreen;
