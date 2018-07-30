import gql from "graphql-tag";

export const GROCERY_QUERY = gql`
    query groceryQuery {
        groceryList @client {
            id
            ingredientName
            ingredientImage
            measurement
            amount
            isChecked
            ingredientType
        }
    }
`;

export const TOGGLE_GROCERY_MUTATION = gql`
    mutation ToggleGroceryItem($groceryID: ID!) {
        toggleGroceryItem(id: $groceryID) @client {
            ingredientName
        }
    }
`;

export const REMOVE_GROCERY_MUTATION = gql`
    mutation RemoveGroceryItem($groceryID: ID!) {
        removeGroceryItem(id: $groceryID) @client {
            ingredient
        }
    }
`;
