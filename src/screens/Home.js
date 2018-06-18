import React from "react";
import { View, Text, Button } from "react-native";

class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <Button
                    onPress={() => {
                        navigate("OtherScreen", { name: "name of the thing" });
                    }}
                    title="Go to other"
                />
            </View>
        );
    }
}

export default HomeScreen;
