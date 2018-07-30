const mockData = [
    {
        __typename: "GroceryItem",
        id: "Chicken Breast",
        ingredientName: "Chicken Breast",
        ingredientImage:
            "https://www.howtoshopforfree.net/wp-content/uploads/2015/05/fresh-chicken-breast.png",
        measurement: "lbs",
        amount: 1.5,
        isChecked: false,
        addedBy: ["Fajitas", "Chicken Kievs"],
        ingredientType: ["Poultry", "Meat"],
        ingredientGroup: ["Meat", "Protein"],
    },
    {
        __typename: "GroceryItem",
        id: "Granulated Sugar",
        ingredientName: "Granulated Sugar",
        ingredientImage:
            "https://images-na.ssl-images-amazon.com/images/I/41JqqEsqYIL._SX355_.jpg",
        measurement: "cups",
        amount: 3,
        isChecked: false,
        addedBy: ["Sugar Cookies"],
        ingredientType: ["Baking Ingredients"],
        ingredientGroup: ["Sugar"],
    },
    {
        __typename: "GroceryItem",
        id: "Unbleached Flour",
        ingredientName: "Unbleached Flour",
        ingredientImage:
            "https://target.scene7.com/is/image/Target/13474786?wid=488&hei=488&fmt=pjpeg",
        measurement: "lbs",
        amount: 2,
        isChecked: false,
        addedBy: ["Sugar Cookies"],
        ingredientType: ["Baking Ingredients"],
        ingredientGroup: [],
    },
];

export default {
    groceryList: mockData,
};
