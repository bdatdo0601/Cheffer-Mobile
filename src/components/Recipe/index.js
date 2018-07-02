import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-native-elements";
import { View, Text, Image } from "react-native";

import style from "./style";

class Recipe extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        onSearch: PropTypes.func,
        data: PropTypes.object,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        onSearch: () => {},
        data: {
            name: "Dat Do",
            avatar_url:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            subtitle: "Vice President",
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            searching: "",
        };
    }

    render() {
        const data = this.props.data;
        return (
            <Card title={data.name}>
                <View key={data.name}>
                    <Text /*style={style.name}*/>{data.title}</Text>
                </View>
            </Card>
        );
    }
}

export default Recipe;
