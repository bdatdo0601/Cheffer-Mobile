import React from "react";
import PropTypes from "prop-types";
import { Card, CheckBox } from "react-native-elements";
import {
    ActivityIndicator,
    View,
    Text,
    Image,
    TouchableOpacity,
} from "react-native";
import Swipeable from "react-native-swipeable";
import _ from "lodash";
// import Interactable from "react-native-interactable";

import style from "./style";

const arrayItemToString = list =>
    list
        .toString()
        .split(",")
        .join(", ");

const emptyContent = <Text />;

class GroceryItem extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        data: PropTypes.object,
        onCheckItem: PropTypes.func,
        onItemClick: PropTypes.func,
        onItemRemove: PropTypes.func,
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
        onItemClick: () => {},
        onItemRemove: () => {},
    };

    constructor(props) {
        super(props);
        this.state = {
            loadingToDelete: false,
        };
    }

    onRemoveItem = _.debounce(() => {
        this.swipeable.recenter();
        this.setState(
            {
                loadingToDelete: true,
            },
            () => {
                setTimeout(() => {
                    this.setState({ loadingToDelete: false });
                    this.props.onItemRemove();
                }, 500);
            }
        );
    }, 200);

    render() {
        const { data } = this.props;
        return (
            <Swipeable
                onRef={ref => {
                    this.swipeable = ref;
                }}
                leftContent={!this.state.loadingToDelete && emptyContent}
                rightContent={!this.state.loadingToDelete && emptyContent}
                onLeftActionRelease={this.onRemoveItem}
                onRightActionRelease={this.onRemoveItem}
            >
                <Card>
                    {this.state.loadingToDelete ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                        <TouchableOpacity onPress={this.props.onItemClick}>
                            <View style={style.container}>
                                <Image
                                    style={style.image}
                                    source={{ uri: data.ingredientImage }}
                                />
                                <View style={style.info}>
                                    <Text style={style.title}>
                                        {data.ingredientName}
                                    </Text>
                                    <Text>
                                        {`${data.amount} ${data.measurement}`}
                                    </Text>
                                    <Text>
                                        {data.ingredientType.length > 0 &&
                                            `Type: ${arrayItemToString(
                                                data.ingredientType
                                            )}`}
                                    </Text>
                                </View>
                                <CheckBox
                                    checked={data.isChecked}
                                    onPress={this.props.onCheckItem}
                                    containerStyle={style.checkbox}
                                />
                            </View>
                        </TouchableOpacity>
                    )}
                </Card>
            </Swipeable>
        );
    }
}

export default GroceryItem;
