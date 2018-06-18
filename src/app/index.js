import React from "react";
import { View, Text, Button, YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated", "Module RCTImageLoader"]);
import { createStackNavigator } from "react-navigation";

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

class Screen2 extends React.Component {
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

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    OtherScreen: {
        screen: Screen2,
    },
});
