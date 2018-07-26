import gql from "graphql-tag";

export default gql`
    query {
        getRecipes(input: {}) {
            recipeID
            name
            headerImage
        }
    }
`;
