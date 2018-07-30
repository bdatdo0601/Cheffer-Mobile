import gql from "graphql-tag";

const getGroceryListQuery = gql`
    {
        groceryList @client {
            id
        }
    }
`;

const getFullGroceryListQuery = gql`
    {
        groceryList @client {
            id
            ingredientImage
            ingredientName
            ingredientGroup
            ingredientType
            amount
            isChecked
            measurement
            addedBy
        }
    }
`;

const addGroceryItems = (_, variables, context) => {
    const newItems = variables.ingredientList.map(item => ({
        __typename: "GroceryItem",
        ...item,
    }));

    const { groceryList } = context.cache.readQuery({
        query: getFullGroceryListQuery,
    });
    const updatedGroceryList = groceryList;
    newItems.forEach(item => {
        const duplicatedItemIndex = groceryList.findIndex(
            elem => elem.id === item.id
        );
        if (duplicatedItemIndex > -1) {
            updatedGroceryList[duplicatedItemIndex] = {
                ...updatedGroceryList[duplicatedItemIndex],
                amount:
                    updatedGroceryList[duplicatedItemIndex].amount +
                    item.amount,
                isChecked: false,
                addedBy: [
                    ...updatedGroceryList[duplicatedItemIndex].addedBy,
                    ...item.addedBy,
                ],
            };
        } else {
            updatedGroceryList.push(item);
        }
    });

    context.cache.writeQuery({
        query: getFullGroceryListQuery,
        data: { groceryList: updatedGroceryList },
    });

    return null;
};

const toggleGroceryItem = async (_, variables, context) => {
    const id = context.getCacheKey({
        __typename: "GroceryItem",
        id: variables.id,
    });
    const fragment = gql`
        fragment checkGroceryItem on GroceryItem {
            id
            isChecked
        }
    `;
    const groceryItem = context.cache.readFragment({
        fragment,
        id,
    });
    const updatedGroceryItem = {
        ...groceryItem,
        isChecked: !groceryItem.isChecked,
    };

    context.cache.writeFragment({
        id,
        fragment,
        data: {
            ...updatedGroceryItem,
            __typename: "GroceryItem",
        },
    });

    return null;
};

const removeGroceryItem = (_, variables, context) => {
    const { groceryList } = context.cache.readQuery({
        query: getGroceryListQuery,
    });

    const updatedGroceryList = groceryList.filter(
        groceryItem => groceryItem.id !== variables.id
    );

    context.cache.writeQuery({
        query: getGroceryListQuery,
        data: { groceryList: updatedGroceryList },
    });

    return null;
};

export default {
    addGroceryItems,
    toggleGroceryItem,
    removeGroceryItem,
};
