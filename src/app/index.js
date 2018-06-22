import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
    "Warning: isMounted(...) is deprecated",
    "Module RCTImageLoader",
]);
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/Home";
import Screen2 from "../screens/Search";
import LoginScreen from "../screens/LoginScreen";

export default createStackNavigator({
    Login: {
        screen: LoginScreen,
    },
    Home: {
        screen: HomeScreen,
    },
    Search: {
        screen: SearchScreen,
    },
});
