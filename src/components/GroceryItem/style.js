import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: { height: 50, width: 70 },
    title: {
        fontWeight: "800",
        flexGrow: 1,
    },
    info: {
        marginLeft: 16,
        flexGrow: 20,
    },
    checkbox: {
        flexGrow: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
