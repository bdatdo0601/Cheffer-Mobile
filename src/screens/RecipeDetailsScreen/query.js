import gql from "graphql-tag";

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
