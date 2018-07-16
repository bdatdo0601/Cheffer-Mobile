import React from "react";
import PropTypes from "prop-types";
import { Image, ScrollView, FlatList, View } from "react-native";
import { Text, Card } from "react-native-elements";
import recipeDefaultData from "./recipeDefault";
import styles from "./style";

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

    keyExtractor = (_, index) => index.toString();

    renderIngredient = ({ item }) => (
        <Text style={styles.ingredients}>
            {`\u2022 ${item.amount} ${item.measurement} of ${item.ingredient}`}
        </Text>
    );

    renderStep = ({ item, index }) => (
        <Text style={styles.steps}>{`${index + 1}. ${item}`}</Text>
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
        const data = recipeDefaultData;
        console.log(this.props.data);
        return (
            <ScrollView>
                {/* <Header
                    centerComponent={{
                        text: data.name,
                        style: { color: "#fff" },
                    }}
                    rightComponent={{ icon: "add", color: "#fff" }}
                /> */}
                {/* <Tile
                    title={data.name}
                    imageSrc={{
                        uri: data.recipe_header_image,
                    }}
                >
                    <View>
                        <Text style={styles.prepTime}>
                            Prep Time: {data.prepTime}
                        </Text>
                    </View>
                    <FlatList
                        data={data.ingredients}
                        renderItem={this.renderIngredient}
                    />
                    <FlatList data={data.steps} renderItem={this.renderStep} />
                </Tile> */}

                <Image
                    style={styles.image}
                    source={{ uri: data.recipe_header_image }}
                />
                <View style={styles.view}>
                    <Text h3>{data.name}</Text>
                    <Text style={styles.prepTime}>
                        Prep Time: {data.prepTime}
                    </Text>
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
                </View>
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
            </ScrollView>
        );
    }
}

export default Recipe;
