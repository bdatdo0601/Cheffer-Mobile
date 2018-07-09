import gql from "graphql-tag";

export default gql`
    query {
        getUsers {
            name {
                first
                middle
                last
            }
            email
        }
    }
`;
