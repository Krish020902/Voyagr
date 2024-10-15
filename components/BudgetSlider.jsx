import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";

const BudgetSlider = () => {
  const [budget, setBudget] = useState(100000);
  const [isIncreased, setIsIncreased] = useState(false);

  const maxBudget = isIncreased ? 500000 : 100000;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>Budget Range</Text>
        <View style={styles.budgetDisplay}>
          <Ionicons name="wallet" size={24} color="#547474" />
          <Text style={styles.budgetText}>₹{budget.toLocaleString()}</Text>
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>₹0</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={maxBudget}
          step={1000}
          value={budget}
          onValueChange={(value) => setBudget(Math.round(value))}
          minimumTrackTintColor="#547474"
          maximumTrackTintColor="#e0e0e0"
          thumbTintColor="#547474"
        />
        <Text style={styles.sliderLabel}>₹{maxBudget.toLocaleString()}</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Increase budget range?</Text>
        <Switch
          value={isIncreased}
          onValueChange={(value) => {
            setIsIncreased(value);
            if (!value && budget > 100000) {
              setBudget(100000);
            }
          }}
          trackColor={{ false: "#ccc", true: "#547474" }}
          thumbColor={isIncreased ? "#fff" : "#f4f3f4"}
          ios_backgroundColor="#ccc"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  budgetDisplay: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#547474",
  },
  budgetText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#547474",
    fontWeight: "600",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  slider: {
    flex: 1,
    height: 40,
    marginHorizontal: 10,
  },
  sliderLabel: {
    fontSize: 14,
    color: "#888",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  switchLabel: {
    fontSize: 16,
    color: "#333",
  },
});

export default BudgetSlider;
