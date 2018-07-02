import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import PropTypes from "prop-types";
import SearchForm from "../../components/FormInput/SearchForm";
import SearchItem from "../../components/SearchItem";

import styles from "./style";

// Should be removed after integration
const list = [
    {
        name: "Burritos",
        avatar_url:
            "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/2/14/0/FNK_breakfast-burrito_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382542427230.jpeg",
        subtitle: "Vice President",
    },
    {
        name: "Quesadillas",
        avatar_url:
            "https://atmedia.imgix.net/0e56ab38542c762f226df9866314520e2fac6f6a?w=800&fit=max",
        subtitle: "Vice Chairman",
    },
    {
        name: "Nachos",
        avatar_url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZv4BjDKz1dCN5M9O6Iqhc5uKcRP6aQhM3CVGQOxFnhCgJSYxA",
        subtitle: "Weennnnn",
    },
];

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
            recipeList: list,
        };
        props.navigation.setParams({
            onSearch: this.onSearch,
            onCancel: this.onCancel,
        });
    }

    onSearch = searchVal => {
        // Do search logic here
        this.setState({
            recipeList: list.filter(item =>
                item.name.toLowerCase().includes(searchVal.toLowerCase())
            ),
        });
    };

    onCancel = () => {
        this.props.navigation.goBack();
    };

    renderItem = ({ item }) => <SearchItem data={item} />;

    render() {
        const { recipeList } = this.state;
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.flatListStyle}
                    keyExtractor={keyExtractor}
                    data={recipeList}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

export default SearchScreen;
