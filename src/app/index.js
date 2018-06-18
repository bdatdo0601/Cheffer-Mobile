import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated", "Module RCTImageLoader"]);
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen/index";
import SearchScreen from "../screens/SearchScreen/index";
import LoginScreen from "../screens/SearchScreen/index";

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
