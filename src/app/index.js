import { YellowBox } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import LoginScreen from "../screens/LoginScreen";
import AddScreen from "../screens/AddScreen";

YellowBox.ignoreWarnings([
    "Warning: isMounted(...) is deprecated",
    "Module RCTImageLoader",
]);

const mainStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        Login: {
            screen: LoginScreen,
        },
    },
    {
        headerMode: "none",
    }
);

export default createStackNavigator(
    {
        Main: {
            screen: mainStack,
            navigationOptions: {
                header: null,
            },
        },
        Search: {
            screen: SearchScreen,
        },
        Add: {
            screen: AddScreen,
        },
    },
    {
        mode: "modal",
    }
);
