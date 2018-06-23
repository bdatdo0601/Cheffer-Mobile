// import React from "react";
// import { View, Text, Button } from "react-native";
// import { SearchBar } from "react-native-elements";
// import styles from "./style";

// import LoginForm from "../../components/FormInput/LoginForm";

// class SearchScreen extends React.Component {
//     render() {
//         const { navigate } = this.props.navigation;
//         return (
//             <View
//                 style={{
//                     width: "100%",
//                     flex: 1,
//                     justifyContent: "center",
//                 }}
//             >
//                 <SearchBar
//                     lightTheme
//                     searchIcon={{ size: 24 }}
//                     placeholder="Type Here..."
//                     style={styles.searchBarStyle}
//                     round
//                 />
//                 <Text>Other Screen</Text>
//                 <Button
//                     onPress={() => {
//                         navigate("Home", { name: "name of the thing thing" });
//                     }}
//                     title="Go back to home"
//                 />
//             </View>
//         );
//     }
// }

// export default SearchScreen;
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
