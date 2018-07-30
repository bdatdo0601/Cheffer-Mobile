import gql from "graphql-tag";

export const ADD_TO_GROCERY_LIST_MUTATION = gql`
    mutation AddGroceryItems($ingredientList: [GroceryItemInput]) {
        addGroceryItems(ingredientList: $ingredientList) @client
    }
`;

export default gql`
    query getRecipeByID($recipeIDInput: GetRecipeByIDInput) {
        getRecipeByID(input: $recipeIDInput) {
            recipeID
            name
            headerImage
            prepTime
            ingredients {
                ingredient {
                    name
                    type {
                        name
                    }
                    group {
                        name
                    }
                }
                amount
                measurement
            }
            steps {
                summary
            }
            comments {
                commentID
                user {
                    userID
                    name {
                        first
                        last
                    }
                }
                comment
                timeCreated
                reply {
                    commentID
                    user {
                        userID
                        name {
                            first
                            last
                        }
                    }
                    comment
                    timeCreated
                }
            }
        }
    }
`;
