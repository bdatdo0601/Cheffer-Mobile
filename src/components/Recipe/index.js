import React from "react";
import PropTypes from "prop-types";
import { View, Text } from "react-native";

class Recipe extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        data: PropTypes.object,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        data: {
            image_url:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            name: "bread rolls",
            ingredients: [
                {
                    ingredient: "schmeckles",
                    amount: 5,
                    measurement: "silver",
                },
                {
                    ingredient: "food",
                    amount: 2,
                    measurement: "oz.",
                },
            ],
            steps: [
                "put your left foot in",
                "take your left foot out",
                "in",
                "out",
                "in",
                "out",
                "shake it all about",
            ],
            associatedRecipes: ["fa6i", "gfa76a"],
            comments: [
                {
                    id: "fnsyoe",
                    userId: "nduie",
                    comment: "This wasn't bad",
                    reply: [
                        {
                            id: "26tr29g",
                            userId: "2f3vf",
                            comment: "I agree",
                            reply: [],
                            likes: -10,
                            time: "some date format",
                        },
                        {
                            id: "2ot2o",
                            userId: "fba697e",
                            comment: "Really? I thought it was terrible",
                            reply: [],
                            likes: 32,
                            time: "some date format",
                        },
                    ],
                    likes: 256,
                    time: "some date format",
                },
            ],
        },
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
