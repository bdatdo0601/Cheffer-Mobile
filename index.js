import React from "react";
import { AppRegistry } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import App from "./src/app";

const client = new ApolloClient({
    uri: "https://cheffer-api-dev.herokuapp.com/graphql",
});

const AppWithGQL = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

AppRegistry.registerComponent("ChefferMobile", () => AppWithGQL);
