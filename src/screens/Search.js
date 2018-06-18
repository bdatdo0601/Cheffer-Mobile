import React from "react";
import { View, Text, Button } from "react-native";

class SearchScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
