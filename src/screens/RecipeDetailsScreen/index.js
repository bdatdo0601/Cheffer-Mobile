import PropTypes from "prop-types";
import { ActivityIndicator, Text, Alert } from "react-native";
import React from "react";
import { Query, Mutation } from "react-apollo";
import Recipe from "../../components/Recipe";
import clickableIcon from "../../components/ClickableIcon";
import recipeDetailQuery, { ADD_TO_GROCERY_LIST_MUTATION } from "./query";
import pixabayAPI from "../../utils/pixabayAPI";

class RecipeDetailsScreen extends React.Component {
    static propTypes = {
        navigation: PropTypes.object,
    };
    static defaultProps = {
        navigation: {},
    };

    static navigationOptions = ({ navigation }) => ({
        headerTitle: (
            <Text>
                {navigation.getParam("currentRecipeName", "Recipe Name")}
            </Text>
        ),
        headerLeft: clickableIcon(
            "arrow-back",
            navigation.getParam("onBack", () => {
                console.warn("nadlwhblfh");
            })
        ),
    });

    onBack = () => {
        this.props.navigation.goBack();
    };

    onAddToGroceryList = (recipe, addGroceryItem) => {
        Promise.all(
            recipe.ingredients.map(async item => {
                const imageRes = await pixabayAPI.getPictureFromAPI(
                    item.ingredient.name
                );
                const image = imageRes.data.hits[0].largeImageURL;
                return {
                    id: item.ingredient.name,
                    ingredientImage: image,
                    ingredientName: item.ingredient.name,
                    ingredientGroup: item.ingredient.group.map(
                        elem => elem.name
                    ),
                    ingredientType: item.ingredient.type.map(elem => elem.name),
                    amount: item.amount,
                    isChecked: false,
                    measurement: item.measurement,
                    addedBy: [recipe.name],
                };
            })
        ).then(ingredientList => {
            addGroceryItem({ variables: { ingredientList } }).then(() => {
                Alert.alert(
                    "Grocery Added",
                    "All ingredient have been added to your grocery list",
                    [],
                    { cancelable: true }
                );
            });
        });
    };

    constructor(props) {
        super(props);
        this.state = {
            data: props.navigation.getParam("currentRecipeId", "defaultRecipe"),
            isNotQuery: props.navigation.getParam("isNotQuery", false),
        };
        console.log(this.state.data);
        props.navigation.setParams({
            onBack: this.onBack,
        });
    }

    render() {
        if (this.state.isNotQuery) return <Recipe data={this.state.data} />;
        return (
            <Query
                query={recipeDetailQuery}
                variables={{ recipeIDInput: { recipeID: this.state.data } }}
            >
                {({ loading, error, data }) => (
                    <Mutation mutation={ADD_TO_GROCERY_LIST_MUTATION}>
                        {addGroceryItem => {
                            if (loading) {
                                return <ActivityIndicator size="large" />;
                            }
                            if (error) {
                                return <Text>Query Error</Text>;
                            }
                            console.log(data);
                            return (
                                <Recipe
                                    data={data.getRecipeByID}
                                    addIngredientsToGrocery={() =>
                                        this.onAddToGroceryList(
                                            data.getRecipeByID,
                                            addGroceryItem
                                        )
                                    }
                                />
                            );
                        }}
                    </Mutation>
                )}
            </Query>
        );
    }
}

// export default RecipesScreen;

// Do this if you want a header bar on top
export default RecipeDetailsScreen;
