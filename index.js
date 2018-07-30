import React from "react";
import { AppRegistry } from "react-native";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// import { InMemoryCache, defaultDataIdFromObject } from "apollo-cache-inmemory";

import defaultStore from "./src/localgql/defaults";
import resolvers from "./src/localgql/resolvers";

import App from "./src/app";

const client = new ApolloClient({
    uri: "https://cheffer-api-dev.herokuapp.com/graphql",
    clientState: {
        defaults: defaultStore,
        resolvers,
    },
});

const AppWithGQL = () => (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

AppRegistry.registerComponent("ChefferMobile", () => AppWithGQL);
