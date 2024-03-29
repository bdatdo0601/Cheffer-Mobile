import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import { StackActions, NavigationActions } from "react-navigation";
import { Query } from "react-apollo";

import userQuery from "./query";

// import Icon from "react-native-vector-icons/FontAwesome";
// import { Input, Button } from "react-native-elements";

import LoginForm from "../../components/FormInput/LoginForm";

import config from "../../assets/config";

import styles from "./style";

class LoginScreen extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        navigation: PropTypes.object,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        navigation: {},
    };

    static navigationOptions = { title: "Welcome", header: null };

    constructor(props) {
        super(props);
        this.state = { usernameError: "", passwordError: "" };
    }

    onLogin = (username, password) => {
        if (username === "") {
            this.setState({ usernameError: "Please input your username" });
        } else {
            this.setState({ usernameError: "" });
        }
        if (password === "") {
            this.setState({ passwordError: "Please input your password" });
        } else {
            this.setState({ passwordError: "" });
        }
        if (username !== "" && password !== "") {
            // Do login logic here
            console.log(username, password);
            // assume login success
            const resetAction = StackActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: "Home",
                    }),
                ],
            });
            this.props.navigation.dispatch(resetAction);
        }
    };

    onSignup = () => {
        // Do signup logic here
        console.log("signup");
    };

    render() {
        return (
            <Query query={userQuery}>
                {({ loading, error, data }) => {
                    if (loading) return <Text>Loading...</Text>;
                    if (error) return <Text>{`Error! ${error.message}`}</Text>;
                    console.log(data);
                    return (
                        <View style={styles.container}>
                            <Text style={styles.title}>{config.APP_NAME}</Text>
                            <LoginForm
                                displaySignup
                                onLogin={this.onLogin}
                                onSignup={this.onSignup}
                                passwordErrorMessage={this.state.passwordError}
                                usernameErrorMessage={this.state.usernameError}
                            />
                        </View>
                    );
                }}
            </Query>
        );
    }
}

export default LoginScreen;
