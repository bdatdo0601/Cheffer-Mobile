import React from "react";
import PropTypes from "prop-types";
import { Card, CheckBox } from "react-native-elements";
import { View, Text, Image } from "react-native";

import style from "./style";

const arrayItemToString = list =>
    list
        .toString()
        .split(",")
        .join(", ");

class GroceryItem extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        data: PropTypes.object,
        onCheckItem: PropTypes.func,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        data: {
            ingredientName: "Chicken",
            ingredientImage:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            measurement: "lbs",
            amount: 100,
            isChecked: false,
            addedBy: ["Recipe1", "Recipe2"],
            ingredientType: ["Poultry", "test", "Meat"],
            ingredientGroup: ["Meat", "Protein"],
        },
        onCheckItem: () => {},
    };

    render() {
        const { data } = this.props;
        return (
            <Card>
                <View style={style.container}>
                    <Image
                        style={style.image}
                        source={{ uri: data.ingredientImage }}
                    />
                    <View style={style.info}>
                        <Text style={style.title}>{data.ingredientName}</Text>
                        <Text>{`${data.amount} ${data.measurement}`}</Text>
                        <Text>
                            {`Type: ${arrayItemToString(data.ingredientType)}`}
                        </Text>
                    </View>
                    <View>
                        <CheckBox
                            checked={data.isChecked}
                            onPress={this.props.onCheckItem}
                            containerStyle={{ marginLeft: 24 }}
                        />
                    </View>
                </View>
            </Card>
        );
    }
}

export default GroceryItem;
