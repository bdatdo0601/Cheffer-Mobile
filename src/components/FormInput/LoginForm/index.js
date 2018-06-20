import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button } from "react-native-elements";

import styles from "./style";

class LoginForm extends React.Component {
    // This will declare the type of each object passed in this class
    static propTypes = {
        onLogin: PropTypes.func,
        onSignup: PropTypes.func,
        displaySignup: PropTypes.bool,
        usernameErrorMessage: PropTypes.string,
        passwordErrorMessage: PropTypes.string,
    };
    // This will declare all the default properties passed in this class
    static defaultProps = {
        onLogin: () => {},
        onSignup: () => {},
        displaySignup: false,
        usernameErrorMessage: null,
        passwordErrorMessage: null,
    };

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    render() {
        const {
            displaySignup,
            onLogin,
            onSignup,
            usernameErrorMessage,
            passwordErrorMessage,
        } = this.props;

        return (
            <View style={styles.container}>
                <Input
                    placeholder="Username"
                    onChangeText={username => this.setState({ username })}
                    leftIcon={<Icon name="user" size={16} color="black" />}
                    containerStyle={styles.usernameInputContainer}
                    errorMessage={usernameErrorMessage || null}
                />
                <Input
                    secureTextEntry
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    leftIcon={<Icon name="lock" size={16} color="black" />}
                    containerStyle={styles.passwordInputContainer}
                    errorMessage={passwordErrorMessage || null}
                />
                <View style={{ flexDirection: "row" }}>
                    <Button
                        title="Login"
                        onPress={() =>
                            onLogin(this.state.username, this.state.password)
                        }
                        containerStyle={styles.loginButton}
                    />
                    {displaySignup && (
                        <Button
                            title="Sign Up"
                            onPress={onSignup}
                            containerStyle={styles.signupButton}
                        />
                    )}
                </View>
            </View>
        );
    }
}

export default LoginForm;
