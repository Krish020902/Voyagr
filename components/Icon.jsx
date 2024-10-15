import React from "react";
import { Ionicons } from "@expo/vector-icons";

function Icon(props) {
  const { color, name, size, style } = props;

  return <Ionicons name={name} size={size} color={color} style={style} />;
}

export default Icon;
