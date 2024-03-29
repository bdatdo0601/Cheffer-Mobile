import React from "react";
import PropTypes from "prop-types";
// import Icon from "react-native-vector-icons/Ionicons";
import { Tile } from "react-native-elements";
import { Text, View } from "react-native";
import Stars from "react-native-stars-rating";

// import styles from "./style";

class RecipeItem extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        onRecipePress: PropTypes.func,
        data: PropTypes.object,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        onRecipePress: () => {},
        data: {
            recipeID: "def",
            name: "Dat Do",
            headerImage:
                "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
            subtitle: "Vice President",
            prepTime: "1 hr",
            rating: 5,
        },
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    addIngredientsToGrocery = () => {};

    render() {
        const { data } = this.props;
        return (
            <Tile
                title={data.name}
                imageSrc={{
                    uri: data.headerImage,
                }}
                onPress={() => this.props.onRecipePress(data)}
            >
                <View>
                    <Text> Prep Time: {data.prepTime} </Text>
                    {/* <View style={styles.container}>
                        <Button
                            style={styles.groceryButton}
                            onClick={this.addIngredientsToGrocery()}
                            icon={
                                <Icon
                                    name={
                                        Platform.OS === "ios"
                                            ? "ios-cart"
                                            : "md-cart"
                                    }
                                    style={styles.groceryIcon}
                                    size={15}
                                    color="white"
                                />
                            }
                            title=""
                        />
                    </View> */}
                    <View style={{ flexDirection: "row" }}>
                        <Stars
                            style={{
                                textAlign: "center",
                            }}
                            rateMax={5}
                            isHalfStarEnabled
                            onStarPress={rating => {
                                console.log(rating);
                            }}
                            rate={
                                data.rating
                                    ? data.rating
                                    : Math.round(Math.random() * 10) / 2
                            }
                            size={30}
                        />
                    </View>
                </View>
            </Tile>
        );
    }
}

export default RecipeItem;
