import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: isMounted(...) is deprecated", "Module RCTImageLoader"]);
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/Home";
import Screen2 from "../screens/Search";

export default createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    OtherScreen: {
        screen: Screen2,
    },
});
