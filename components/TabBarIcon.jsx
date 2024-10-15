import React from "react";
import { Text, View } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY, PRIMARY_COLOR } from "../assets/styles";

function TabBarIcon(props) {
  const { focused, iconName, text } = props;
  const iconFocused = focused ? PRIMARY_COLOR : DARK_GRAY;

  return (
    <View style={styles.iconMenu}>
      <Icon name={iconName} size={16} color={iconFocused} />
      <Text style={[styles.tabButtonText, { color: iconFocused }]}>{text}</Text>
    </View>
  );
}

export default TabBarIcon;