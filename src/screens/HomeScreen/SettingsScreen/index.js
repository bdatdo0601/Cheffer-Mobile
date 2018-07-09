import React from "react";
import { View, FlatList } from "react-native";
import RecipeItem from "../../../components/RecipeItem";
import style from "./style";

const list = [
    {
        name: "Burritos",
        recipe_header_image:
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/14/0/FNK_breakfast-burrito_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382542427230.jpeg",
        subtitle: "Vice President",
    },
    {
        name: "Quesadillas",
        recipe_header_image:
            "https://atmedia.imgix.net/0e56ab38542c762f226df9866314520e2fac6f6a?w=800&fit=max",
        subtitle: "Vice Chairman",
    },
    {
        name: "Nachos",
        recipe_header_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZv4BjDKz1dCN5M9O6Iqhc5uKcRP6aQhM3CVGQOxFnhCgJSYxA",
        subtitle: "Weennnnn",
    },
];

class SettingsScreen extends React.Component {
    keyExtractor = (_, index) => index.toString();

    renderItem = ({ item }) => <RecipeItem data={item} />;

    render() {
        return (
            <View style={style.viewStyle}>
                <FlatList
                    style={style.flatListStyle}
                    keyExtractor={this.keyExtractor}
                    data={list}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

export default SettingsScreen;
