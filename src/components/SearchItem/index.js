import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-native-elements";
import { View, Text, Image, TouchableOpacity } from "react-native";

import style from "./style";

class RecipeItem extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        data: PropTypes.object,
        onPress: PropTypes.func,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        data: {
            name: "Dat Do",
            recipe_header_image:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            subtitle: "Vice President",
        },
        onPress: () => {},
    };

    render() {
        const { data, onPress } = this.props;
        return (
            <TouchableOpacity onPress={dataItem => onPress(dataItem)}>
                <Card key={data.name}>
                    <View style={style.container}>
                        <Image
                            style={style.image}
                            source={{ uri: data.recipe_header_image }}
                        />
                        <View style={style.info}>
                            <Text style={style.title}>{data.name}</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }
}

export default RecipeItem;
