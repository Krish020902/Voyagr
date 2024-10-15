import React from "react";
import { View, StyleSheet } from "react-native";
import GenderFilter from "../components/GenderFilter";
import AgeRangeSlider from "../components/AgeRangeSlider";
import DistanceSlider from "../components/DistanceSlider";
import BudgetSlider from "../components/BudgetSlider";
import PlaceTypeSelector from "../components/PlaceTypeSelector";
import IconButtons from "../components/IconButtons";
import { ScrollView } from "react-native-gesture-handler";

const FilterPage = () => {
  return (
    <ScrollView style={styles.container}>
      <GenderFilter />
      <AgeRangeSlider />
      <DistanceSlider />
      <BudgetSlider />
      <PlaceTypeSelector />
      <IconButtons />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7f7f7",
  },
});

export default FilterPage;
