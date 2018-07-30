import gql from "graphql-tag";

export default gql`
    query groceryQuery {
        groceryList @client {
            id
            ingredientName
            ingredientImage
            ingredientType
            ingredientGroup
            measurement
            amount
            isChecked
            addedBy
        }
    }
`;
