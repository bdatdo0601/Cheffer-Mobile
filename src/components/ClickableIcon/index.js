import Icon from "react-native-vector-icons/Ionicons";
import { TouchableOpacity, Platform } from "react-native";
import React from "react";

const ClickableIcon = (iconName, onClick) => (
    <TouchableOpacity onPress={onClick}>
        <Icon
            name={Platform.OS === "ios" ? `ios-${iconName}` : `md-${iconName}`}
            size={25}
            style={{ marginLeft: 18, marginRight: 16 }}
        />
    </TouchableOpacity>
);

export default ClickableIcon;
