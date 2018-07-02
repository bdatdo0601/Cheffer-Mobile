import { YellowBox } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import LoginScreen from "../screens/LoginScreen";
import RecipeDetailsScreen from "../screens/RecipeDetailsScreen";

YellowBox.ignoreWarnings([
    "Warning: isMounted(...) is deprecated",
    "Module RCTImageLoader",
]);

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        },
    },
    Login: {
        screen: LoginScreen,
    },
    Search: {
        screen: SearchScreen,
        navigationOptions: {
            header: null,
        },
    },
    RecipeDetails: {
        screen: RecipeDetailsScreen,
    },
});
