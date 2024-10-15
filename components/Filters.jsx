import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles from "../assets/styles";
import { useNavigation } from "@react-navigation/native";
const Filters = () => {
  const navigation = useNavigation();
  const handleFilterPage = () => {
    navigation.navigate("FilterPage");
  };

  return (
    <TouchableOpacity style={styles.filters} onPress={handleFilterPage}>
      <Text style={styles.filtersText}>
        <Icon name="filter" size={13} color={styles.DARK_GRAY} /> Filters
      </Text>
    </TouchableOpacity>
  );
};

export default Filters;
