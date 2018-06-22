import React from "react";
import { View, Text, Button } from "react-native";
import { SearchBar } from "react-native-elements";
import styles from "./style";

class SearchScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View
                style={{
                    width: "100%",
                    flex: 1,
                    justifyContent: "center",
                }}
            >
                <SearchBar
                    lightTheme
                    searchIcon={{ size: 24 }}
                    placeholder="Type Here..."
                    style={styles.searchBarStyle}
                    round
                />
                <Text>Other Screen</Text>
                <Button
                    onPress={() => {
                        navigate("Home", { name: "name of the thing thing" });
                    }}
                    title="Go back to home"
                />
            </View>
        );
    }
}

export default SearchScreen;
