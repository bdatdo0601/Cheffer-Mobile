import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import RecipesScreen from "./RecipesScreen";
import GroceriesScreen from "./GroceriesScreen";
import BrowseScreen from "./BrowseScreen";
import SettingsScreen from "./SettingsScreen";
import { Platform } from "react-native";

const tabNav = createBottomTabNavigator(
    {
        TabItem1: {
            screen: RecipesScreen,
            navigationOptions: {
                tabBarLabel: "Recipes",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={
                            Platform.OS === "ios"
                                ? "ios-restaurant"
                                : "md-restaurant"
                        }
                        size={30}
                        color={tintColor}
                    />
                ),
            },
        },
        TabItem2: {
            screen: GroceriesScreen,
            navigationOptions: {
                tabBarLabel: "Groceries",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={Platform.OS === "ios" ? "ios-cart" : "md-cart"}
                        size={30}
                        color={tintColor}
                    />
                ),
            },
        },
        TabItem3: {
            screen: BrowseScreen,
            navigationOptions: {
                tabBarLabel: "Browse",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={Platform.OS === "ios" ? "ios-globe" : "md-globe"}
                        size={30}
                        color={tintColor}
                    />
                ),
            },
        },
        TabItem4: {
            screen: SettingsScreen,
            navigationOptions: {
                tabBarLabel: "Settings",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        name={Platform.OS === "ios" ? "ios-cog" : "md-cog"}
                        size={30}
                        color={tintColor}
                    />
                ),
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: "#222",
        },
    }
);

export default tabNav;
