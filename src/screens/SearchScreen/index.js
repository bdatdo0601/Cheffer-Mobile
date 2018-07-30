import React from "react";
import {
    ActivityIndicator,
    View,
    Text,
    TouchableOpacity,
    FlatList,
} from "react-native";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import SearchForm from "../../components/FormInput/SearchForm";
import SearchItem from "../../components/SearchItem";
import recipeSearchQuery from "./query";

import styles from "./style";

const cancelButton = onCancel => (
    <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
    </TouchableOpacity>
);

const keyExtractor = (_, index) => index.toString();

class SearchScreen extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        navigation: PropTypes.object,
    };
    static navigationOptions = ({ navigation }) => ({
        headerLeft: (
            <SearchForm onSearch={navigation.getParam("onSearch", () => {})} />
        ),
        headerRight: cancelButton(navigation.getParam("onCancel", () => {})),
    });
    // This will declare all the default properties passed in this class
    static defaultProps = {
        navigation: {},
    };

    constructor(props) {
        super(props);
        this.state = {
            searchVal: "",
        };
        props.navigation.setParams({
            onSearch: this.onSearch,
            onCancel: this.onCancel,
        });
    }

    onSearch = searchValue => {
        this.setState({ searchVal: searchValue });
    };

    filteredData = data =>
        data.filter(item =>
            item.name.toLowerCase().includes(this.state.searchVal.toLowerCase())
        );

    onCancel = () => {
        this.props.navigation.goBack();
    };

    onItemPress = recipe => {
        const { navigation } = this.props;
        // console.warn(currentRecipeId);
        navigation.navigate("RecipeDetails", {
            currentRecipeId: recipe.recipeID,
            currentRecipeName: recipe.name,
        });
    };

    renderItem = ({ item }) => (
        <SearchItem data={item} onPress={() => this.onItemPress(item)} />
    );

    render() {
        return (
            <Query query={recipeSearchQuery}>
                {({ loading, error, data }) => {
                    if (loading) {
                        return <ActivityIndicator size="large" />;
                    }
                    if (error) {
                        console.log(error);
                        return <Text>Query Error</Text>;
                    }
                    return (
                        <View style={styles.container}>
                            <FlatList
                                style={styles.flatListStyle}
                                keyExtractor={keyExtractor}
                                data={this.filteredData(data.getRecipes)}
                                renderItem={this.renderItem}
                            />
                        </View>
                    );
                }}
            </Query>
        );
    }
}

export default SearchScreen;
