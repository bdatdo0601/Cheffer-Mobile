import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";
import recipeDefaultData from "./recipeDefault";

class Recipe extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        data: PropTypes.object,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        data: recipeDefaultData,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { data } = this.props;
        return (
            <View>
                <Text>Prep Time: {data.name}</Text>
            </View>
        );
    }
}

export default Recipe;
