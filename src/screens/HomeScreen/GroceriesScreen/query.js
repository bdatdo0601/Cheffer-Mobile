import gql from "graphql-tag";

export default gql`
    query {
        groceryList @client {
            ingredientName
            ingredientImage
            measurement
            amount
            isChecked
            ingredientType
        }
    }
`;
