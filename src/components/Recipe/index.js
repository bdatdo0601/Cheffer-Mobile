import React from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/Ionicons";
import Speech from "react-native-tts";
import { Text, Card, Button } from "react-native-elements";
import {
    Image,
    ScrollView,
    FlatList,
    View,
    Platform,
    TouchableOpacity,
    Linking,
} from "react-native";
import recipeDefaultData from "./recipeDefault";
import styles from "./style";

class Recipe extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        data: PropTypes.object,
        addIngredientsToGrocery: PropTypes.func,
        externalData: PropTypes.bool,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        data: recipeDefaultData,
        addIngredientsToGrocery: () => {},
        externalData: false,
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    keyExtractor = (_, index) => index.toString();

    onClick = data => {
        Speech.speak(data);
    };

    renderIngredient = ({ item }) => (
        <Text style={styles.ingredients}>
            {this.props.externalData
                ? `- ${item.text}`
                : `- ${item.amount} ${item.measurement} of ${
                      item.ingredient.name
                  }`}
        </Text>
    );

    renderStep = ({ item, index }) => (
        <View>
            <TouchableOpacity
                onPress={() => {
                    Speech.stop();
                    Speech.speak(item.summary);
                }}
            >
                <Text style={styles.steps}>
                    {`${index + 1}. ${item.summary} `}
                    <Icon
                        name={Platform.OS === "ios" ? "ios-play" : "md-play"}
                        size={16}
                        style={styles.stepIcon}
                    />
                </Text>
            </TouchableOpacity>
        </View>
    );

    renderComment = ({ item }) => (
        <Card style={styles.comment}>
            <Text style={styles.user}>{item.userId}</Text>
            <Text>{item.comment}</Text>
            <FlatList
                keyExtractor={this.keyExtractor}
                data={item.reply}
                renderItem={this.renderComment}
            />
        </Card>
    );

    render() {
        const { data } = this.props;
        return (
            <ScrollView>
                <Image
                    style={styles.image}
                    source={{
                        uri: data.headerImage
                            ? data.headerImage
                            : "http://www.independentmediators.co.uk/wp-content/uploads/2016/02/placeholder-image.jpg",
                    }}
                />
                <View style={styles.view}>
                    <Text h3>{data.name}</Text>
                    {!this.props.externalData && (
                        <Text style={styles.prepTime}>
                            Prep Time: {data.prepTime}
                        </Text>
                    )}
                    <View style={styles.specialView}>
                        <Text h4 style={styles.header}>
                            Ingredients
                        </Text>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={data.ingredients}
                            renderItem={this.renderIngredient}
                        />
                    </View>
                    {this.props.externalData && (
                        <View>
                            <Text h4 style={styles.header}>
                                Details:{" "}
                            </Text>
                            <Text
                                style={{ color: "blue" }}
                                onPress={() => Linking.openURL(data.link)}
                            >
                                {data.link}
                            </Text>
                        </View>
                    )}
                    {!this.props.externalData && (
                        <View style={styles.specialView}>
                            <Text h4 style={styles.header}>
                                Steps
                            </Text>
                            <FlatList
                                keyExtractor={this.keyExtractor}
                                data={data.steps}
                                renderItem={this.renderStep}
                            />
                        </View>
                    )}
                </View>
                <View style={styles.container}>
                    {!this.props.externalData && (
                        <Button
                            disabled={this.props.externalData}
                            style={styles.groceryButton}
                            onPress={this.props.addIngredientsToGrocery}
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
                            title="Add ingredients to grocery list"
                        />
                    )}
                </View>
                {data.comments.length > 0 ? (
                    <View style={styles.specialView}>
                        <Text h4 style={styles.header}>
                            Comments
                        </Text>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={data.comments}
                            renderItem={this.renderComment}
                        />
                    </View>
                ) : null}
            </ScrollView>
        );
    }
}

export default Recipe;
