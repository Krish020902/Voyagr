import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
import { Ionicons } from "@expo/vector-icons";

const AgeRangeSlider = () => {
  const [maxAge, setMaxAge] = useState(60);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.label}>Preferred Age Range</Text>
        <View style={styles.ageDisplay}>
          <Ionicons name="person" size={24} color="#547474" />
          <Text style={styles.ageText}>{`18 - ${maxAge} years`}</Text>
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>18</Text>
        <Slider
          style={styles.slider}
          minimumValue={18}
          maximumValue={100}
          step={1}
          value={maxAge}
          onValueChange={(value) => setMaxAge(Math.round(value))}
          minimumTrackTintColor="#547474"
          maximumTrackTintColor="#e0e0e0"
          thumbTintColor="#547474"
        />
        <Text style={styles.sliderLabel}>100</Text>
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
  ageDisplay: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#547474",
  },
  ageText: {
    fontSize: 16,
    marginLeft: 8,
    color: "#547474",
    fontWeight: "600",
  },
  sliderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
});

export default AgeRangeSlider;
